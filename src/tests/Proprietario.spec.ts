import request from 'supertest';
import { app } from '../app';
import { connect, disconnect } from '../databases'

let proprietario = {
  "nome": "Newton Gonzaga Costa",
  "rg":"20.498.544-4",
  "cpf": "099.103.097-42",
  "contatos": [
    {"tipo": "celular", "valor":"(21) 98706-5099"},
    {"tipo": "email", "valor":"ncosta.rj@gmail.com"}
  ],
  "contas": [
    {
      "agencia":"0387",
      "numero":"15427-1",
      "banco": {
        "codigo":"341",
        "nome":"Itau Unibanco S/A"
      },
      "principal": true
    }
  ]
};



describe('Proprietario', () => {

  beforeAll(()=> {
    connect()
  })

  afterAll(() =>{
    disconnect();
  }); 

  it('Deve salvar um proprietario', async () => {    
    const response = await request(app)
      .post('/api/v1/proprietarios')
      .send(proprietario);
    expect(response.status).toBe(201);
  });

});