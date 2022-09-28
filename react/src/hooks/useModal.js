import Swal from "sweetalert2";

export const useModal = () => {

      const guardar = () => {            
      Swal.fire({
        title: "Deseas confirmar el nuevo registro?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#041F2C",
        cancelButtonColor: "#008CBA",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Si, deseo confirmar el registro!",
        focusConfirm: false,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "¡Muchas gracias!",
            text: "El registro se ha guardado con éxito",
            icon: "success",
            confirmButtonColor: "#041F2C",
            confirmButtonText: "Cerrar",
            focusConfirm: false,
          }).then((result) => {
            
          });
        }else if(!result.isConfirmed){
          
        }
      });
    };

  return {
    guardar,
  }
}
