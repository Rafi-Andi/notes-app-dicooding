class FormInput extends HTMLElement {
  constructor() {
    super();

    this._style = document.createElement("style");
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  updateStyle() {
    this._style.innerHTML = `
    .note-form {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      margin: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .form-group {
      margin-bottom: 15px;
    }

    .form-group label {
      display: block;
      margin-bottom: 5px;
      color: #333;
      font-weight: 500;
    }

    .form-group input,
    .form-group textarea {
      width: 90%;
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1em;
    }

    .form-group textarea {
      min-height: 120px;
      resize: vertical;
    }

    .form-buttons {
      display: flex;
      gap: 10px;
      justify-content: flex-start;
    }

    .cancel-btn {
      padding: 8px 16px;
      background: #6c757d;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .save-btn {
      padding: 8px 16px;
      background: #28a745;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

        `;
  }

  emptyElement() {
    this._shadowRoot.innerHTML = "";
  }

  render() {
    this.emptyElement();
    this.updateStyle();

    this._shadowRoot.appendChild(this._style);

    this._shadowRoot.innerHTML += `
    <form class="note-form">
      <div class="form-group">
        <label for="note-title">Judul</label>
        <input 
          type="text" 
          id="note-title" 
          placeholder="Masukkan judul note"
          required
        >
      </div>
      
      <div class="form-group">
        <label for="note-content">Isi Note</label>
        <textarea 
          id="note-content" 
          placeholder="Tuliskan isi note anda di sini..."
          required
        ></textarea>
      </div>

      <div class="form-buttons">
        <button type="submit" id="submit" class="save-btn">Simpan</button>
      </div>
    </form>
        `;
  }
}

customElements.define("form-input", FormInput);
