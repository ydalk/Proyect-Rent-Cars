import React from 'react'
import { Description } from './PolicyStyle';

const Policy = () => {
  return (
    <>
        <Description >
          <div>
            <h5>Normas de la compañía</h5>
            <p>
            La arrendadora se compromete a entregar el vehículo que se encuentre descrito en la reserva,
            en su defecto entregara un auto del mismo valor de renta.
            </p>
          </div>
          <div>
            <h5>Salud y Seguridad</h5>
            <p>
            El vehículo se entregará limpio interna y externamente, 
            desinfectados según protocolo cov-19. 
            El arrendador deberá devolverlo en las mismas condiciones en que se lo entregaron, 
            de lo contrario deberá pagar el lavado a las tarifas vigentes.
            </p>
          </div>
          <div>
            <h5>Politicas de cancelación y devolución</h5>
            <p>
            Si desea cancelar el alquiler hasta 24 horas  antes de la hora de recogida del vehículo, 
            debe cancelar la reserva y solicitar un reembolso en línea. 
            </p>
            <p>
            Una vez cancelada, le reembolsaremos dentro de un plazo de aproximadamente 
            siete días hábiles. El reembolso se realizará a la misma tarjeta con la que pagó 
            por adelantado
            </p>
          </div>
        </Description>
    </>
  )
}

export default Policy;