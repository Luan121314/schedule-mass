import * as yup from 'yup';

class GenericValidation{

    async id(id: string){
        const schema  = yup.object().shape({
            id: yup.string().required().uuid(),
        })

        await schema.validate({id})
    }
}

export default  GenericValidation;