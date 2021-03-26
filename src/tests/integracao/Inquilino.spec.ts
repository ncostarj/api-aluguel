import request from 'supertest';
import { app } from '../../app';
import { connect, disconnect } from '../../databases'

let inquilino = {
  "nome": "Claudia",
  "rg":"123123123123",
  "cpf": "123123123123",
  "contatos": [
    {"tipo": "celular", "valor":"(21) 123123123"},
    {"tipo": "email", "valor":"email@email.com"}
  ],
  "contas": [
    {
      "agencia":"1234",
      "numeroConta":"12345",
      "banco": {
        "codigo":"111",
        "nome":"Iteste"
      },
      "isPrincipal": true
    }
  ]
};

describe('Inquilino', () => {

  beforeAll(()=> {
    connect()
  })

  afterAll(() =>{
    disconnect();
  }); 

  it('Deve salvar um inquilino', async () => {    
    const response = await request(app)
      .post('/api/v1/inquilinos')
      .send(inquilino);
    expect(response.status).toBe(201);
  });

});