import { useState } from 'react'
import './CartaoResultado.css'

function CartaoResultado({ resultado }) {
    // Estado local: mostrar ou esconder as notas
    const [mostrarNotas, setMostrarNotas] = useState(false)

    // Ainda não há resultado? Mostra um aviso
    if (resultado === null) {
        return (
            <section className="resultado resultado--vazio">
                <p> Preencha o formulário e clique em <strong>Calcular média</strong>.</p>
            </section>
    )
}

const { nome, notas, media } = resultado

// Ternário encadeado: decide a situação pela média
const situacao = media >= 7 ? 'Aprovado' : media >= 5 ? 'Recuperação' : 'Reprovado'

// Ternário para escolher a classe CSS (cor do cartão)
const classeSituacao =
    media >= 7 ? 'resultado--aprovado' : media >= 5 ? 'resultado--recuperacao' : 'resultado--reprovado'

return (
    <section className={`resultado ${classeSituacao}`}>
        <p className="resultado__nome">{nome}</p>
        <p className="resultado__media">{media.toFixed(1)}</p>
        <p className="resultado__situacao">{situacao}</p>

        <button className="resultado__detalhes" onClick={() => setMostrarNotas(!mostrarNotas)}>
            {mostrarNotas ? 'Ocultar notas ▲' : 'Ver notas ▼'}
        </button>
        
        {mostrarNotas ? (
            <ul className="resultado__lista">
                {notas.map((nota, indice) => (
                 <li key={indice}>
                     {indice + 1}o bimestre: <strong>{nota.toFixed(1)}</strong>
                 </li>
             ))}
         </ul>
        ) : null}
    </section>
    )
}

export default CartaoResultado