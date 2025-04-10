import styles from './forms.module.css';

const Forms = ({ formData, setFormData, saveFunction, allCampsNecessity }) => {
  const isFormValid = (formData.titulo && formData.descricao && formData.feitor) || !(allCampsNecessity);
  return (
    <div className={styles.formContainer}>
      <div className={styles.inputGroup}>
        <label>Título</label>
        <input
          type="text"
          value={formData.titulo}
          onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Descrição</label>
        <input
          type="text"
          value={formData.descricao}
          onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>Feitor</label>
        <input
          type="text"
          value={formData.feitor}
          onChange={(e) => setFormData({ ...formData, feitor: e.target.value })}
        />
      </div>

      <div className={styles.inputGroup}>
        <label>
          <input
            type="checkbox"
            checked={formData.completa}
            onChange={(e) => setFormData({ ...formData, completa: e.target.checked })}
          />
          Tarefa completa
        </label>
      </div>

      <button className={styles.button} onClick={saveFunction} disabled ={!isFormValid}>
        Salvar
      </button>
    </div>
  );
};

export default Forms;
