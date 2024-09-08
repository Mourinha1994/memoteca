import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pensamento } from '../../models/pensamento.model';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly API_URL = "http://localhost:3000/pensamentos"

  constructor(private client: HttpClient) { }

  listar(): Observable<Pensamento[]> {
    return this.client.get<Pensamento[]>(this.API_URL);
  }

  buscarPorId(id:number): Observable<Pensamento> {
    const url = `${this.API_URL}/${id}`
    return this.client.get<Pensamento>(url)
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.client.post<Pensamento>(this.API_URL, pensamento);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API_URL}/${pensamento.id}`;
    return this.client.put<Pensamento>(url, pensamento);
  }

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API_URL}/${id}`;
    return this.client.delete<Pensamento>(url);
  }
}
