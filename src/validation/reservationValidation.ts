import * as yup from 'yup';
import Generic from './Generic';

interface ReservationProps{
    name: string,
    email: string,
    phone: string,
    companion: number,
    community_id: string
}

class ReservationValidation extends Generic {

    async create(data: ReservationProps){
        const schema  = yup.object().shape({
            name: yup.string().required("Você precisa preencher o campo nome"),
            email: yup.string().email("Digite um email válido").required("Você precisa preencher o campo email"),
            phone: yup.string().required("Você precisa preencher o campo celular").min(9),
            companion: yup.number().required().min(0).max(4, "Você só pode reservar para 4 pessoas."),
            community_id: yup.string().required("Você precisa selecionar uma comunidade").uuid()
        })

        await schema.validate(data)
    }
}

export default new ReservationValidation();