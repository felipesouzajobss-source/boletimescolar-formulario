import './CampoNota.css'

function CampoNota({ id, label, tipo = 'number', valor, aoAlterar, placeholder }) {
    return (
        <div className="campo">
            <label htmlFor={id}>{label}</label>
            <input
            id={id}
            type={tipo}
            value={valor}
            placeholder={placeholder}
            min={tipo === 'number' ? 0 : undefined}
            max={tipo === 'number' ? 10 : undefined}
            step={tipo === 'number' ? 0.1 : undefined}
            onChange={(evento) => aoAlterar(evento.target.value)}
            />
        </div>
    )
}
export default CampoNota