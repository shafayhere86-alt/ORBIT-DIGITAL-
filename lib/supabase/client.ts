import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseKey)

// Auth functions
export async function signUpUser(email: string, password: string, fullName: string, role: 'client' | 'employee' = 'client') {
  const { data: { user }, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        role
      }
    }
  })

  if (authError) throw authError

  if (user) {
    const { error: userError } = await supabase
      .from('users')
      .insert({
        id: user.id,
        email,
        full_name: fullName,
        role
      })

    if (userError) throw userError
  }

  return user
}

export async function signInUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) throw error

  // Update last login
  if (data.user) {
    await supabase
      .from('users')
      .update({ last_login: new Date().toISOString() })
      .eq('id', data.user.id)
  }

  return data
}

export async function signOutUser() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

export async function resetPassword(email: string) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/reset-password`
  })

  if (error) throw error
}

export async function updatePassword(newPassword: string) {
  const { error } = await supabase.auth.updateUser({
    password: newPassword
  })

  if (error) throw error
}

// User functions
export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) throw error
  return data
}

export async function updateUserProfile(userId: string, updates: any) {
  const { data, error } = await supabase
    .from('users')
    .update(updates)
    .eq('id', userId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function uploadAvatar(userId: string, file: File) {
  const fileName = `${userId}-${Date.now()}`
  const { error: uploadError } = await supabase.storage
    .from('avatars')
    .upload(fileName, file, { upsert: true })

  if (uploadError) throw uploadError

  const { data: { publicUrl } } = supabase.storage
    .from('avatars')
    .getPublicUrl(fileName)

  await supabase
    .from('users')
    .update({ avatar_url: publicUrl })
    .eq('id', userId)

  return publicUrl
}

// Order functions
export async function createOrder(clientId: string, serviceId: string, data: any) {
  const { data: order, error } = await supabase
    .from('orders')
    .insert({
      client_id: clientId,
      service_id: serviceId,
      ...data,
      status: 'pending'
    })
    .select()
    .single()

  if (error) throw error
  return order
}

export async function getClientOrders(clientId: string) {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('client_id', clientId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function updateOrderStatus(orderId: string, status: string) {
  const { data, error } = await supabase
    .from('orders')
    .update({ status })
    .eq('id', orderId)
    .select()
    .single()

  if (error) throw error
  return data
}

// Invoice functions
export async function generateInvoiceNumber() {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const random = Math.random().toString(36).substring(7).toUpperCase()
  return `INV-${year}${month}-${random}`
}

export async function createInvoice(data: any) {
  const invoiceNumber = await generateInvoiceNumber()
  
  const { data: invoice, error } = await supabase
    .from('invoices')
    .insert({
      ...data,
      invoice_number: invoiceNumber,
      status: 'draft'
    })
    .select()
    .single()

  if (error) throw error
  return invoice
}

export async function getInvoicesByClient(clientId: string) {
  const { data, error } = await supabase
    .from('invoices')
    .select('*')
    .eq('client_id', clientId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

// Message functions
export async function sendMessage(senderId: string, receiverId: string, content: string, fileUrl?: string) {
  const { data, error } = await supabase
    .from('messages')
    .insert({
      sender_id: senderId,
      receiver_id: receiverId,
      content,
      file_url: fileUrl
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getConversation(userId1: string, userId2: string) {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .or(
      `and(sender_id.eq.${userId1},receiver_id.eq.${userId2}),and(sender_id.eq.${userId2},receiver_id.eq.${userId1})`
    )
    .order('created_at', { ascending: true })

  if (error) throw error
  return data
}

// Notification functions
export async function createNotification(userId: string, type: string, title: string, message: string, relatedId?: string) {
  const { data, error } = await supabase
    .from('notifications')
    .insert({
      user_id: userId,
      type,
      title,
      message,
      related_id: relatedId
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getUserNotifications(userId: string) {
  const { data, error } = await supabase
    .from('notifications')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function markNotificationAsRead(notificationId: string) {
  const { error } = await supabase
    .from('notifications')
    .update({ is_read: true })
    .eq('id', notificationId)

  if (error) throw error
}

// File functions
export async function uploadFile(file: File, bucket: string, orderId?: string, projectId?: string) {
  const fileName = `${Date.now()}-${file.name}`
  const path = `${fileName}`

  const { error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(path, file)

  if (uploadError) throw uploadError

  const { data: { publicUrl } } = supabase.storage
    .from(bucket)
    .getPublicUrl(path)

  return { path, url: publicUrl }
}

export async function getProjectFiles(projectId: string) {
  const { data, error } = await supabase
    .from('files')
    .select('*')
    .eq('project_id', projectId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

// Blog functions
export async function createBlog(data: any) {
  const slug = data.title.toLowerCase().replace(/\s+/g, '-')

  const { data: blog, error } = await supabase
    .from('blogs')
    .insert({
      ...data,
      slug
    })
    .select()
    .single()

  if (error) throw error
  return blog
}

export async function publishedBlogs() {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })

  if (error) throw error
  return data
}

// Portfolio functions
export async function getPortfolioProjects(category?: string) {
  let query = supabase.from('portfolio').select('*')

  if (category) {
    query = query.eq('category', category)
  }

  const { data, error } = await query.order('completion_date', { ascending: false })

  if (error) throw error
  return data
}

// Testimonials functions
export async function getFeaturedTestimonials() {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .eq('featured', true)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

// Activity logging
export async function logActivity(userId: string, action: string, resourceType: string, resourceId: string, details?: any) {
  const { error } = await supabase
    .from('activity_logs')
    .insert({
      user_id: userId,
      action,
      resource_type: resourceType,
      resource_id: resourceId,
      details
    })

  if (error) console.error('Failed to log activity:', error)
}
