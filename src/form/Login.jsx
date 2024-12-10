import React from "react";
import { Login_hook } from "../hooks/log_hook";

export default function Login() {

    //login x usuario
    const { formik_validatelogon, loaddatax } = Login_hook();
    //const { value, setValue, isInvalid, isVisible, setIsVisible, toggleVisibility, isValidationpassword } = Login_hook();

    return (

        <form className="flex flex-col gap-4" onSubmit={formik_validatelogon.handleSubmit}>
            <input
                id="userrname"
                name="userrname"
                type="email"
                label="Email-Usuario"
                variant="faded"
                className="max-w-xs"
                /*value={value}
                isInvalid={isInvalid}
                color={isInvalid ? "danger" : "success"}
                errorMessage={isInvalid && "Por favor, ingrese un correo valido"}
                onValueChange={setValue}*/
                value={formik_validatelogon.values.userrname}
                onChange={formik_validatelogon.handleChange}
                
                color={formik_validatelogon.touched.userrname && formik_validatelogon.errors.userrname ? "danger" : "success"}
                

            />
            <br></br><br></br>
            <input
                id="passwordd"
                name="passwordd"
                label="Contraseña"
                variant="faded"
                className="max-w-xs"

                value={formik_validatelogon.values.passwordd}
                onChange={formik_validatelogon.handleChange}
                
                color={formik_validatelogon.touched.passwordd && formik_validatelogon.errors.passwordd ? "danger" : "success"}
                


                

            />
           <br></br><br></br>
            <div className="flex gap-2 justify-end">
                <button  color='success' type="submit" variant='solid'   >
                    {loaddatax ? (<b>Autenticando información</b>) : (<b>Acceder</b>)}
                </button>
                
            </div>
        </form>
    )
}

