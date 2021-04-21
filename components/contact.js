const Contact = () => {
  return `
    <div class="contact-box">
      <div class="left"></div>
      <div class="right">
        <h2>Contactanos</h2>
        <form id="form" name="formulario" method="POST" action="https://banciss-api.herokuapp.com/api/pqrs/form/">
            <label for="title"> </label>
          <input name="title" type="text" class="field" placeholder="Asunto">
          <label for="description"> </label>
          <input name="description" type="text" class="field" placeholder="Descripcion">
          <button type="submit" name="submit" class="btn">Enviar</button>
        </form>
      </div>
    </div>`;
};
