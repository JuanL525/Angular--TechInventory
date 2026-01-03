import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <h1>Inventario Actual</h1>
    <table border="1" cellpadding="10" style="border-collapse: collapse; width: 100%; background: white;">
      <thead>
        <tr>
          <th>ID</th>
          <th>Producto</th>
          <th>Stock</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        @for (item of products; track item.id) {
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.stock }}</td>
            <td>
              @if (item.stock > 0) {
                <span style="color: green">Disponible</span>
              } @else {
                <span style="color: red">Agotado</span>
              }
            </td>
          </tr>
        } @empty {
          <tr><td colspan="4">No hay productos</td></tr>
        }
      </tbody>
    </table>
  `
})
export class HomeComponent {
  products = [
    { id: 1, name: 'Laptop Dell XPS', stock: 5 },
    { id: 2, name: 'Mouse Logitech', stock: 0 },
    { id: 3, name: 'Monitor Samsung 24"', stock: 12 },
    { id: 4, name: 'Teclado Mecánico', stock: 3 },
  ];
}