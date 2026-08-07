import React from 'react'
import { useAppState } from '@/store/AppContext'
import { useRevealAll } from '@/hooks/useReveal'
import styles from './Services.module.css'

export default function Services() {
  const { siteConfig, services } = useAppState()
  useRevealAll([])

  return (
    <section id="servicios" className={`section ${styles.services}`}>
      <div className="grid-bg" style={{ opacity: 0.5 }} />
      <div className="container">
        <div className="reveal">
          <p className="section-tag">{siteConfig.servicesTag}</p>
          <h2 className="section-title">
            {siteConfig.servicesTitle}
          </h2>
          <p className="section-subtitle">
            {siteConfig.servicesSubtitle}
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((svc, i) => (
            <div
              key={svc.id}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} ${styles.card} glass-card`}
            >
              <div className={styles.cardTop}>
                <span className={styles.icon}>{svc.icon}</span>
                <span className={styles.tag}>{svc.tag}</span>
              </div>
              <h3 className={styles.cardTitle}>{svc.title}</h3>
              <p className={styles.cardDesc}>{svc.description}</p>
              <div className={styles.cardLine} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
