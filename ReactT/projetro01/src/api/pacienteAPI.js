
import axios  from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function cadastrarProntuario(nome,datanascimento, cep,endereco,telefone,consulta, 
queixaprincipal, outrasqueixas, anamnese, hipotese,temtratant,usamedicamentos, trat_ant,medicamentos,
    diagnostico,metasalcancadas,sessoesrealizadas, proximassessoes,usuario){
        const resposta = await api.post('/protuario/paciente',{
            nome : nome,                                 
            datanascimento : datanascimento,
            cep: cep,                                 
            endereco: endereco,
            telefone:telefone,                            
            consulta: consulta,
            queixaprincipal:queixaprincipal,
            outrasqueixas:outrasqueixas,
            anamnese:anamnese,                               
            hipotese:hipotese,
            temtratant: temtratant,                                
            usamedicamentos: usamedicamentos,
            trat_ant:trat_ant,                                      
            ds_medic_utili: medicamentos,
            diagnostico: diagnostico,                       
            metasalcancadas:metasalcancadas,
            sessoesrealizadas:sessoesrealizadas,                   
            proximassessoes:proximassessoes,
            id: usuario
            })
            return resposta.data
            
    }


    export async function alterarProntuario(id,nome,datanascimento, cep,endereco,telefone,consulta, 
        queixaprincipal, outrasqueixas, anamnese, hipotese,temtratant,usamedicamentos, trat_ant,medicamentos,
            diagnostico,metasalcancadas,sessoesrealizadas, proximassessoes,usuario) {
                const resposta = await api.post(`/prontuario/${id}`,{
                    nome : nome,                                 
                    datanascimento : datanascimento,
                    cep: cep,                                 
                    endereco: endereco,
                    telefone:telefone,                            
                    consulta: consulta,
                    queixaprincipal:queixaprincipal,
                    outrasqueixas:outrasqueixas,
                    anamnese:anamnese,                               
                    hipotese:hipotese,
                    temtratant: temtratant,                                
                    usamedicamentos: usamedicamentos,
                    trat_ant:trat_ant,                                      
                    ds_medic_utili: medicamentos,
                    diagnostico: diagnostico,                       
                    metasalcancadas:metasalcancadas,
                    sessoesrealizadas:sessoesrealizadas,                   
                    proximassessoes:proximassessoes,
                    id: usuario
                    })
                    return resposta.data
                    
            }
    export async function listarTodosPacientes(){ 
    const respost = await api.get(`/pacientes`)
    return respost.data;
    }

    export async function buscarPacientesNome(nome){ 
        const respost = await api.get(`/pacientes/buscas?=nome=${nome}`)
        return respost.data;
        }

    export async function excluirPaciente(id){
        const r = await api.delete(`/pacientes/${id}`)
        return r.status;
        }