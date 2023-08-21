import './Equipo.css'
import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba'

const Equipo = (props) => {
    // Destructuración
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    const bgColor = { backgroundColor: hexToRgba(colorPrimario, 0.7) }
    const borderColor = { borderColor: colorPrimario }

    return <> { colaboradores.length > 0 &&
        <section className='equipo' style={bgColor}>
            <input
                type='color'
                className='input-color'
                value={colorPrimario}
                onChange={(e) => {
                    actualizarColor(e.target.value, id)
                }}
            />
            <h3 style={borderColor}>{titulo}</h3>
                <div className='colaboradores'>
                    {
                        colaboradores.map((colaborador, index) => <Colaborador 
                            datos={colaborador} 
                            key={index} 
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }
                </div>
        </section>
        }
    </>
}

export default Equipo