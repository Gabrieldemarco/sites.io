import React, { useState } from 'react'
import { useAppState, useAppDispatch } from '@/store/AppContext'
import { DEFAULT_CONFIG } from '@/store/defaults'
import styles from './Admin.module.css'

export default function AdminConfig() {
  const { siteConfig } = useAppState()
  const dispatch = useAppDispatch()
  const [form, setForm] = useState(siteConfig)
  const [saved, setSaved] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSave = () => {
    dispatch({ type: 'UPDATE_CONFIG', payload: form })
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleReset = () => {
    if (confirm('¿Resetear configuración a valores por defecto?')) {
      setForm(DEFAULT_CONFIG)
      dispatch({ type: 'UPDATE_CONFIG', payload: DEFAULT_CONFIG })
    }
  }

  return (
    <div className={styles.configWrap}>
      <div className={`glass-card ${styles.section}`}>
        <h3 className={styles.sectionTitle}>🏢 Información de la empresa</h3>
        <div className={styles.grid2}>
          <Field label="URL del logo (opcional)" name="companyLogo" value={form.companyLogo} onChange={handleChange} type="url" placeholder="https://..." />
          <Field label="Nombre de la empresa" name="companyName" value={form.companyName} onChange={handleChange} />
          <Field label="Email de contacto" name="contactEmail" value={form.contactEmail} onChange={handleChange} type="email" />
          <Field label="Número WhatsApp (con código país, sin +)" name="whatsappNumber" value={form.whatsappNumber} onChange={handleChange} placeholder="34600000000" />
          <Field label="URL Instagram" name="instagramUrl" value={form.instagramUrl} onChange={handleChange} type="url" />
          <Field label="URL YouTube" name="youtubeUrl" value={form.youtubeUrl} onChange={handleChange} type="url" />
          <Field label="URL Facebook" name="facebookUrl" value={form.facebookUrl} onChange={handleChange} type="url" />
        </div>
      </div>

      <div className={`glass-card ${styles.section}`}>
        <h3 className={styles.sectionTitle}>🎯 Textos del Hero</h3>
        <Field label="Badge del hero" name="heroBadgeText" value={form.heroBadgeText} onChange={handleChange} />
        <Field label="Tagline principal" name="tagline" value={form.tagline} onChange={handleChange} />
        <div className="form-group" style={{ marginTop: 16 }}>
          <label className="form-label">Subtítulo del hero</label>
          <textarea name="heroSubtitle" className="form-input" value={form.heroSubtitle} onChange={handleChange} rows={3} />
        </div>
      </div>

      <div className={`glass-card ${styles.section}`}>
        <h3 className={styles.sectionTitle}>📊 Estadísticas del Hero</h3>
        <div className={styles.grid2}>
          <Field label="Estadística 1 - Número" name="stat1Num" value={form.stat1Num} onChange={handleChange} />
          <Field label="Estadística 1 - Etiqueta" name="stat1Label" value={form.stat1Label} onChange={handleChange} />
          <Field label="Estadística 2 - Número" name="stat2Num" value={form.stat2Num} onChange={handleChange} />
          <Field label="Estadística 2 - Etiqueta" name="stat2Label" value={form.stat2Label} onChange={handleChange} />
          <Field label="Estadística 3 - Número" name="stat3Num" value={form.stat3Num} onChange={handleChange} />
          <Field label="Estadística 3 - Etiqueta" name="stat3Label" value={form.stat3Label} onChange={handleChange} />
        </div>
      </div>

      <div className={`glass-card ${styles.section}`}>
        <h3 className={styles.sectionTitle}>🛠️ Textos de Secciones</h3>
        <div className={styles.grid2}>
          <Field label="Tag Servicios" name="servicesTag" value={form.servicesTag} onChange={handleChange} />
          <Field label="Título Servicios" name="servicesTitle" value={form.servicesTitle} onChange={handleChange} />
          <Field label="Tag Galería" name="galleryTag" value={form.galleryTag} onChange={handleChange} />
          <Field label="Título Galería" name="galleryTitle" value={form.galleryTitle} onChange={handleChange} />
          <Field label="Tag Video" name="videoTag" value={form.videoTag} onChange={handleChange} />
          <Field label="Título Video" name="videoTitle" value={form.videoTitle} onChange={handleChange} />
          <Field label="Tag Testimonios" name="reviewsTag" value={form.reviewsTag} onChange={handleChange} />
          <Field label="Título Testimonios" name="reviewsTitle" value={form.reviewsTitle} onChange={handleChange} />
          <Field label="Tag Contacto" name="contactTag" value={form.contactTag} onChange={handleChange} />
          <Field label="Título Contacto" name="contactTitle" value={form.contactTitle} onChange={handleChange} />
        </div>
        <div className="form-group" style={{ marginTop: 16 }}>
          <label className="form-label">Subtítulo Servicios</label>
          <textarea name="servicesSubtitle" className="form-input" value={form.servicesSubtitle} onChange={handleChange} rows={2} />
        </div>
        <div className="form-group" style={{ marginTop: 16 }}>
          <label className="form-label">Subtítulo Galería</label>
          <textarea name="gallerySubtitle" className="form-input" value={form.gallerySubtitle} onChange={handleChange} rows={2} />
        </div>
        <div className="form-group" style={{ marginTop: 16 }}>
          <label className="form-label">Subtítulo Video</label>
          <textarea name="videoSubtitle" className="form-input" value={form.videoSubtitle} onChange={handleChange} rows={2} />
        </div>
        <div className="form-group" style={{ marginTop: 16 }}>
          <label className="form-label">Subtítulo Contacto</label>
          <textarea name="contactSubtitle" className="form-input" value={form.contactSubtitle} onChange={handleChange} rows={2} />
        </div>
      </div>

      <div className={`glass-card ${styles.section}`}>
        <h3 className={styles.sectionTitle}>🎨 Colores</h3>
        <div className={styles.grid2}>
          <Field label="Color primario" name="primaryColor" value={form.primaryColor} onChange={handleChange} type="color" />
          <Field label="Color de acento" name="accentColor" value={form.accentColor} onChange={handleChange} type="color" />
        </div>
      </div>

      <div className={`glass-card ${styles.section}`}>
        <h3 className={styles.sectionTitle}>📍 Información Adicional</h3>
        <div className={styles.grid2}>
          <Field label="Área de servicio" name="serviceArea" value={form.serviceArea} onChange={handleChange} />
          <Field label="Tiempo de respuesta garantizado" name="guaranteedResponse" value={form.guaranteedResponse} onChange={handleChange} />
        </div>
        <div style={{ marginTop: 16 }}>
          <Field label="Texto del footer" name="footerText" value={form.footerText} onChange={handleChange} />
        </div>
      </div>

      <div className={`glass-card ${styles.section}`}>
        <h3 className={styles.sectionTitle}>🎬 Video Showreel</h3>
        <Field
          label="URL del video (YouTube o Vimeo)"
          name="videoUrl"
          value={form.videoUrl}
          onChange={handleChange}
          placeholder="https://www.youtube.com/watch?v=..."
          type="url"
        />
        <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 8 }}>
          Pega la URL normal de YouTube o Vimeo. Se convertirá automáticamente a embed.
        </p>
      </div>

      <div className={styles.actions}>
        {saved && <span className={styles.savedMsg}>✅ Configuración guardada</span>}
        <button className="btn btn-outline" onClick={handleReset} id="admin-reset-config">
          Resetear
        </button>
        <button className="btn btn-primary" onClick={handleSave} id="admin-save-config">
          Guardar cambios
        </button>
      </div>
    </div>
  )
}

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  placeholder?: string
}) {
  return (
    <div className="form-group" style={{ marginBottom: 16 }}>
      <label className="form-label" htmlFor={`config-${name}`}>{label}</label>
      <input
        id={`config-${name}`}
        name={name}
        type={type}
        className="form-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={type === 'color' ? { height: '40px', padding: '4px' } : undefined}
      />
    </div>
  )
}
