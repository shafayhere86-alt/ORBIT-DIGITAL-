export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string
          phone: string | null
          avatar_url: string | null
          role: 'admin' | 'client' | 'employee'
          company_name: string | null
          status: 'active' | 'inactive' | 'suspended'
          created_at: string
          updated_at: string
          last_login: string | null
          two_factor_enabled: boolean
          two_factor_verified: boolean
        }
        Insert: {
          id?: string
          email: string
          full_name: string
          phone?: string | null
          avatar_url?: string | null
          role: 'admin' | 'client' | 'employee'
          company_name?: string | null
          status?: 'active' | 'inactive' | 'suspended'
          created_at?: string
          updated_at?: string
          last_login?: string | null
          two_factor_enabled?: boolean
          two_factor_verified?: boolean
        }
        Update: {
          id?: string
          email?: string
          full_name?: string
          phone?: string | null
          avatar_url?: string | null
          role?: 'admin' | 'client' | 'employee'
          company_name?: string | null
          status?: 'active' | 'inactive' | 'suspended'
          created_at?: string
          updated_at?: string
          last_login?: string | null
          two_factor_enabled?: boolean
          two_factor_verified?: boolean
        }
      }
      employees: {
        Row: {
          id: string
          user_id: string
          department: string
          position: string
          salary: number
          joining_date: string
          experience_years: number
          skills: string[]
          performance_rating: number
          status: 'active' | 'inactive' | 'on_leave'
          manager_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          department: string
          position: string
          salary: number
          joining_date: string
          experience_years: number
          skills?: string[]
          performance_rating?: number
          status?: 'active' | 'inactive' | 'on_leave'
          manager_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          department?: string
          position?: string
          salary?: number
          joining_date?: string
          experience_years?: number
          skills?: string[]
          performance_rating?: number
          status?: 'active' | 'inactive' | 'on_leave'
          manager_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      services: {
        Row: {
          id: string
          name: string
          slug: string
          description: string
          icon: string
          features: string[]
          pricing: {
            starter: number
            professional: number
            business: number
            enterprise: number
          }
          category: string
          image_url: string | null
          is_active: boolean
          sort_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description: string
          icon: string
          features?: string[]
          pricing?: any
          category: string
          image_url?: string | null
          is_active?: boolean
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string
          icon?: string
          features?: string[]
          pricing?: any
          category?: string
          image_url?: string | null
          is_active?: boolean
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          client_id: string
          service_id: string
          project_name: string
          package: 'starter' | 'professional' | 'business' | 'enterprise'
          amount: number
          status: 'pending' | 'approved' | 'working' | 'revision' | 'completed' | 'delivered' | 'cancelled'
          assigned_employee_id: string | null
          requirements: string
          progress: number
          start_date: string | null
          end_date: string | null
          delivery_date: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          client_id: string
          service_id: string
          project_name: string
          package: 'starter' | 'professional' | 'business' | 'enterprise'
          amount: number
          status?: 'pending' | 'approved' | 'working' | 'revision' | 'completed' | 'delivered' | 'cancelled'
          assigned_employee_id?: string | null
          requirements?: string
          progress?: number
          start_date?: string | null
          end_date?: string | null
          delivery_date?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          client_id?: string
          service_id?: string
          project_name?: string
          package?: 'starter' | 'professional' | 'business' | 'enterprise'
          amount?: number
          status?: 'pending' | 'approved' | 'working' | 'revision' | 'completed' | 'delivered' | 'cancelled'
          assigned_employee_id?: string | null
          requirements?: string
          progress?: number
          start_date?: string | null
          end_date?: string | null
          delivery_date?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          order_id: string
          name: string
          description: string
          status: 'pending' | 'approved' | 'working' | 'revision' | 'completed' | 'delivered' | 'cancelled'
          progress: number
          assigned_to: string[]
          start_date: string
          end_date: string | null
          files_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          order_id: string
          name: string
          description: string
          status?: 'pending' | 'approved' | 'working' | 'revision' | 'completed' | 'delivered' | 'cancelled'
          progress?: number
          assigned_to?: string[]
          start_date: string
          end_date?: string | null
          files_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          name?: string
          description?: string
          status?: 'pending' | 'approved' | 'working' | 'revision' | 'completed' | 'delivered' | 'cancelled'
          progress?: number
          assigned_to?: string[]
          start_date?: string
          end_date?: string | null
          files_count?: number
          created_at?: string
          updated_at?: string
        }
      }
      invoices: {
        Row: {
          id: string
          invoice_number: string
          order_id: string
          client_id: string
          amount: number
          tax: number
          total: number
          status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled'
          due_date: string
          issue_date: string
          payment_date: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          invoice_number: string
          order_id: string
          client_id: string
          amount: number
          tax?: number
          total: number
          status?: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled'
          due_date: string
          issue_date?: string
          payment_date?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          invoice_number?: string
          order_id?: string
          client_id?: string
          amount?: number
          tax?: number
          total?: number
          status?: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled'
          due_date?: string
          issue_date?: string
          payment_date?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      payments: {
        Row: {
          id: string
          invoice_id: string
          amount: number
          method: 'stripe' | 'paypal' | 'bank_transfer' | 'manual'
          status: 'pending' | 'completed' | 'failed' | 'refunded'
          transaction_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          invoice_id: string
          amount: number
          method: 'stripe' | 'paypal' | 'bank_transfer' | 'manual'
          status?: 'pending' | 'completed' | 'failed' | 'refunded'
          transaction_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          invoice_id?: string
          amount?: number
          method?: 'stripe' | 'paypal' | 'bank_transfer' | 'manual'
          status?: 'pending' | 'completed' | 'failed' | 'refunded'
          transaction_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          sender_id: string
          receiver_id: string
          content: string
          file_url: string | null
          file_type: string | null
          is_read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          sender_id: string
          receiver_id: string
          content: string
          file_url?: string | null
          file_type?: string | null
          is_read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          sender_id?: string
          receiver_id?: string
          content?: string
          file_url?: string | null
          file_type?: string | null
          is_read?: boolean
          created_at?: string
        }
      }
      notifications: {
        Row: {
          id: string
          user_id: string
          type: 'order' | 'payment' | 'message' | 'project' | 'ticket' | 'comment'
          title: string
          message: string
          related_id: string | null
          is_read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          type: 'order' | 'payment' | 'message' | 'project' | 'ticket' | 'comment'
          title: string
          message: string
          related_id?: string | null
          is_read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          type?: 'order' | 'payment' | 'message' | 'project' | 'ticket' | 'comment'
          title?: string
          message?: string
          related_id?: string | null
          is_read?: boolean
          created_at?: string
        }
      }
      files: {
        Row: {
          id: string
          order_id: string | null
          project_id: string | null
          uploaded_by: string
          file_name: string
          file_type: string
          file_size: number
          storage_path: string
          url: string
          is_public: boolean
          created_at: string
        }
        Insert: {
          id?: string
          order_id?: string | null
          project_id?: string | null
          uploaded_by: string
          file_name: string
          file_type: string
          file_size: number
          storage_path: string
          url: string
          is_public?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string | null
          project_id?: string | null
          uploaded_by?: string
          file_name?: string
          file_type?: string
          file_size?: number
          storage_path?: string
          url?: string
          is_public?: boolean
          created_at?: string
        }
      }
      support_tickets: {
        Row: {
          id: string
          client_id: string
          subject: string
          description: string
          priority: 'low' | 'medium' | 'high' | 'urgent'
          status: 'open' | 'in_progress' | 'resolved' | 'closed'
          assigned_to: string | null
          created_at: string
          updated_at: string
          resolved_at: string | null
        }
        Insert: {
          id?: string
          client_id: string
          subject: string
          description: string
          priority?: 'low' | 'medium' | 'high' | 'urgent'
          status?: 'open' | 'in_progress' | 'resolved' | 'closed'
          assigned_to?: string | null
          created_at?: string
          updated_at?: string
          resolved_at?: string | null
        }
        Update: {
          id?: string
          client_id?: string
          subject?: string
          description?: string
          priority?: 'low' | 'medium' | 'high' | 'urgent'
          status?: 'open' | 'in_progress' | 'resolved' | 'closed'
          assigned_to?: string | null
          created_at?: string
          updated_at?: string
          resolved_at?: string | null
        }
      }
      blogs: {
        Row: {
          id: string
          title: string
          slug: string
          content: string
          excerpt: string
          author_id: string
          category_id: string
          featured_image: string | null
          published: boolean
          published_at: string | null
          views: number
          seo_meta: {
            title: string
            description: string
            keywords: string[]
          }
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content: string
          excerpt: string
          author_id: string
          category_id: string
          featured_image?: string | null
          published?: boolean
          published_at?: string | null
          views?: number
          seo_meta?: any
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string
          excerpt?: string
          author_id?: string
          category_id?: string
          featured_image?: string | null
          published?: boolean
          published_at?: string | null
          views?: number
          seo_meta?: any
          created_at?: string
          updated_at?: string
        }
      }
      testimonials: {
        Row: {
          id: string
          client_id: string
          client_name: string
          company: string
          content: string
          rating: number
          featured: boolean
          image_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          client_id: string
          client_name: string
          company: string
          content: string
          rating: number
          featured?: boolean
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          client_id?: string
          client_name?: string
          company?: string
          content?: string
          rating?: number
          featured?: boolean
          image_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      portfolio: {
        Row: {
          id: string
          title: string
          description: string
          category: string
          client_name: string
          images: string[]
          videos: string[]
          completion_date: string
          link: string | null
          featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          category: string
          client_name: string
          images?: string[]
          videos?: string[]
          completion_date: string
          link?: string | null
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          category?: string
          client_name?: string
          images?: string[]
          videos?: string[]
          completion_date?: string
          link?: string | null
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      contacts: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          subject: string
          message: string
          status: 'new' | 'replied' | 'archived'
          replied_at: string | null
          admin_notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          subject: string
          message: string
          status?: 'new' | 'replied' | 'archived'
          replied_at?: string | null
          admin_notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          subject?: string
          message?: string
          status?: 'new' | 'replied' | 'archived'
          replied_at?: string | null
          admin_notes?: string | null
          created_at?: string
        }
      }
      faqs: {
        Row: {
          id: string
          question: string
          answer: string
          category: string
          sort_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          question: string
          answer: string
          category: string
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          question?: string
          answer?: string
          category?: string
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
      }
      settings: {
        Row: {
          id: string
          key: string
          value: any
          updated_at: string
        }
        Insert: {
          id?: string
          key: string
          value: any
          updated_at?: string
        }
        Update: {
          id?: string
          key?: string
          value?: any
          updated_at?: string
        }
      }
      activity_logs: {
        Row: {
          id: string
          user_id: string
          action: string
          resource_type: string
          resource_id: string
          details: any
          ip_address: string | null
          user_agent: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          action: string
          resource_type: string
          resource_id: string
          details?: any
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          action?: string
          resource_type?: string
          resource_id?: string
          details?: any
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
      }
    }
    Views: {}
    Functions: {}
    Enums: {}
  }
}
