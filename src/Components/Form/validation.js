export default function validation (userData) 
{
    const errors = {
        email: '',
        password: '',
    }

    if (!userData.email)  errors.email = 'Debe rellenar este campo';
    else if (userData.email.length > 35) errors.email = 'Se exedio la cantidad de caracteres permitidos';
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email))) {
        errors.email = 'Ingrese un email valido'; }
    else errors.email = '';

    if (!userData.password) errors.password = 'Debe rellenar este campo';
    else if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/.test(userData.password))){
        errors.password = 'Ingrese un password valido'; }
    else errors.password = '';

    return errors;
};