import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { Login } from "../src/auth/pages/Login";
import { UserProvider } from "../src/context/useContext";
import '@testing-library/jest-dom/extend-expect';
import {jest} from '@jest/globals'

/**
 * @jest-environment jsdom
 */

afterEach(cleanup);

let userIsLogged= false;
const setIsLogged = function(value){
    userIsLogged= value;
}

test('Formulario de inicio de sesion disponible', () => {
    const history = createBrowserHistory();

    render(
        <UserProvider>
          <Router location={history.location} navigator={history}>
            <Login/>
        </Router>  
        </UserProvider>
        
    );
    
    expect(screen.getByRole('textbox', { placeholder: ' Correo electronico' })).toBeVisible();
    expect(screen.getByLabelText('Contraseña')).toBeVisible();
    expect(screen.getByRole('button', { name: 'Ingresar' })).toBeEnabled();
});


it('iniciar sesion exitoso', async () => {
    
    const history = createBrowserHistory();
    const alertMock = jest.spyOn(window,'alert').mockImplementation();
    render(
        <UserProvider>
          <Router location={history.location} navigator={history}>
            <Login setIsLogged = {setIsLogged}/>
        </Router>  
        </UserProvider>
        
    );
    const emailInput = screen.getByRole('textbox', { placeholder: ' Correo electronico' });
    fireEvent.change(emailInput, {target: { value: "admin@gmailcom" }});

    const passwordInput = screen.getByLabelText('Contraseña');
    fireEvent.change(passwordInput, {target: { value: "admin123" }});

    const buttonLogin = screen.getByRole('button', { name: 'Ingresar' });
    fireEvent.click(buttonLogin);
    expect(alertMock).toHaveBeenCalledTimes(0);
    expect(userIsLogged).toBeTruthy();
});


it('iniciar sesion fallido', async () => {
    const history = createBrowserHistory();
    const alertMock = jest.spyOn(window,'alert').mockImplementation();
    render(
        <UserProvider>
          <Router location={history.location} navigator={history}>
            <Login setIsLogged = {setIsLogged}/>
        </Router>  
        </UserProvider>
        
    );

    const emailInput = screen.getByRole('textbox', { placeholder: ' Correo electronico' });
    fireEvent.change(emailInput, {target: { value: "fake@correo.com" }});

    const passwordInput = screen.getByLabelText('Contraseña');
    fireEvent.change(passwordInput, {target: { value: "fakePassword" }});

    const buttonLogin = screen.getByRole('button', { name: 'Ingresar' });
    fireEvent.click(buttonLogin);
    expect(alertMock).toHaveBeenCalledTimes(1);
});
