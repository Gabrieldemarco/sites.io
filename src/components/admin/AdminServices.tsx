import React, { useState } from 'react'
import { useAppState, useAppDispatch } from '@/store/AppContext'
import type { ServiceItem } from '@/types'
import styles from './Admin.module.css'

export default function AdminServices() {
  const { services } = useAppState()
  const dispatch = useAppDispatch()
  const [editing, setEditing] = useState<ServiceItem | null>(null)
  const [form, setForm] = useState<Partial<ServiceItem>>({
    icon: '',
    title: '',
    description: '',
    tag: '',
  })

  const handleEdit = (service: ServiceItem) => {
    setEditing(service)
    setForm(service)
  }

  const handleAdd = () => {
    setEditing(null)
    setForm({
      icon: '',
      title: '',
      description: '',
      tag: '',
    })
  }

  const handleSave = () => {
    if (!form.title || !form.description || !form.tag) return

    if (editing) {
      dispatch({
        type: 'UPDATE_SERVICE',
        payload: { ...form, id: editing.id } as ServiceItem,
      })
    } else {
      dispatch({
        type: 'ADD_SERVICE',
        payload: {
          id: crypto.randomUUID(),
          icon: form.icon || '🔧',
          title: form.title,
          description: form.description,
          tag: form.tag,
        } as ServiceItem,
      })
    }

    setEditing(null)
    setForm({ icon: '', title: '', description: '', tag: '' })
  }

  const handleDelete = (id: string) => {
    if (confirm('¿Eliminar este servicio?')) {
      dispatch({ type: 'DELETE_SERVICE', payload: id })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div>
      {/* Add/Edit form */}
      <div className={`glass-card ${styles.section}`}>
        <h3 className={styles.sectionTitle}>
          {editing ? '✏️ Editar servicio' : '➕ Añadir servicio'}
        </h3>
        <div className={styles.grid2}>
          <div className="form-group">
            <label className="form-label" htmlFor="service-icon">Icono (emoji)</label>
            <input
              id="service-icon"
              type="text"
              className="form-input"
              placeholder="🎥"
              value={form.icon}
              onChange={handleChange}
              name="icon"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="service-tag">Etiqueta</label>
            <input
              id="service-tag"
              type="text"
              className="form-input"
              placeholder="Filmación"
              value={form.tag}
              onChange={handleChange}
              name="tag"
            />
          </div>
        </div>
        <div className="form-group" style={{ marginTop: 16 }}>
          <label className="form-label" htmlFor="service-title">Título *</label>
          <input
            id="service-title"
            type="text"
            className="form-input"
            placeholder="Cinematografía Aérea"
            value={form.title}
            onChange={handleChange}
            name="title"
          />
        </div>
        <div className="form-group" style={{ marginTop: 16 }}>
          <label className="form-label" htmlFor="service-desc">Descripción *</label>
          <textarea
            id="service-desc"
            className="form-input"
            placeholder="Descripción detallada del servicio..."
            value={form.description}
            onChange={handleChange}
            name="description"
            rows={3}
          />
        </div>

        <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
          <button
            className="btn btn-primary"
            onClick={handleSave}
            disabled={!form.title || !form.description || !form.tag}
            id="admin-save-service"
          >
            {editing ? '💾 Guardar cambios' : '➕ Añadir servicio'}
          </button>
        </div>
      </div>

      {/* Services list */}
      <div className={`glass-card ${styles.section}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, gap: 16, flexWrap: 'wrap' }}>
          <h3 className={styles.sectionTitle} style={{ marginBottom: 0 }}>
            🛠️ Servicios actuales ({services.length})
          </h3>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary"
              onClick={handleAdd}
              style={{ fontSize: 13, padding: '10px 18px' }}
            >
              ➕ Nuevo servicio
            </button>
            {editing && (
              <button
                className="btn btn-outline"
                onClick={() => {
                  setEditing(null)
                  setForm({ icon: '', title: '', description: '', tag: '' })
                }}
                style={{ fontSize: 13, padding: '10px 18px' }}
              >
                Cancelar edición
              </button>
            )}
          </div>
        </div>

        <div className={styles.servicesList}>
          {services.map((service) => (
            <div key={service.id} className={`${styles.serviceItem} glass-card`}>
              <div className={styles.serviceHeader}>
                <span className={styles.serviceIcon}>{service.icon}</span>
                <div>
                  <h4 className={styles.serviceTitle}>{service.title}</h4>
                  <span className={styles.serviceTag}>{service.tag}</span>
                </div>
              </div>
              <p className={styles.serviceDesc}>{service.description}</p>
              <div className={styles.serviceActions}>
                <button
                  className="btn btn-outline"
                  style={{ fontSize: 13, padding: '8px 16px' }}
                  onClick={() => handleEdit(service)}
                >
                  ✏️ Editar
                </button>
                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDelete(service.id)}
                  aria-label="Eliminar servicio"
                >
                  🗑️ Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>

        {services.length === 0 && (
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '40px 0' }}>
            No hay servicios. ¡Añade el primero arriba!
          </p>
        )}
      </div>
    </div>
  )
}
