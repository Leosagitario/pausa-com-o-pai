import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <span className={styles.kicker}>paternidade com propósito</span>

        <h1 className={styles.h1}>Menos correria. Mais presença. Um pai por vez.</h1>

        <p className={styles.lead}>
          Uma pausa curta e prática para fortalecer seu lar: direção, hábitos e
          presença — sem culpa e sem enrolação.
        </p>

        <div className={styles.ctaRow}>
          <a className={styles.primary} href="#comecar">
            Começar agora
          </a>

          <a className={styles.secondary} href="#beneficios">
            Ver benefícios
          </a>
        </div>

        {/* âncoras simples pra não quebrar os links */}
        <div id="comecar" style={{ height: 24 }} />
        <div id="beneficios" style={{ height: 24 }} />
      </main>
    </div>
  );
}