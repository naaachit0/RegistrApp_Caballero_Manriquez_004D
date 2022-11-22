import { AppPage } from './app.po';
import { async } from 'rxjs';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Prueba 1', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Start with Ionic UI Components');
  });


  it('Prueba 2', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Registrarse');
  });

  it('Prueba 3', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Generate QR Code');
  });

  it('Prueba 4', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Contraseña:');
  });
  
  it('Prueba 5', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Ingrese correo');
  });
});
