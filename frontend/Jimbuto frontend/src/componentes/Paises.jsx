import { forwardRef } from "react";

export const Paises = forwardRef((props, ref) => {
  return (
    <select
      ref={ref}
      name="pais"
      className="select-paises"
      style={{
        backgroundColor: "transparent",
        border: "none",
        color: "#888f9a",
        width: "100%",
      }}
    >
      <option value="">Selecione o seu país</option>
      <option value="🇦🇫 Afeganistão">🇦🇫 Afeganistão</option>
      <option value="🇿🇦 África do Sul">🇿🇦 África do Sul</option>
      <option value="🇦🇱 Albânia">🇦🇱 Albânia</option>
      <option value="🇩🇪 Alemanha">🇩🇪 Alemanha</option>
      <option value="🇦🇩 Andorra">🇦🇩 Andorra</option>
      <option value="🇦🇴 Angola">🇦🇴 Angola</option>
      <option value="🇦🇬 Antígua e Barbuda">🇦🇬 Antígua e Barbuda</option>
      <option value="🇸🇦 Arábia Saudita">🇸🇦 Arábia Saudita</option>
      <option value="🇩🇿 Argélia">🇩🇿 Argélia</option>
      <option value="🇦🇷 Argentina">🇦🇷 Argentina</option>
      <option value="🇦🇲 Armênia">🇦🇲 Armênia</option>
      <option value="🇦🇺 Austrália">🇦🇺 Austrália</option>
      <option value="🇦🇹 Áustria">🇦🇹 Áustria</option>
      <option value="🇧🇸 Bahamas">🇧🇸 Bahamas</option>
      <option value="🇧🇭 Bahrein">🇧🇭 Bahrein</option>
      <option value="🇧🇩 Bangladesh">🇧🇩 Bangladesh</option>
      <option value="🇧🇧 Barbados">🇧🇧 Barbados</option>
      <option value="🇧🇪 Bélgica">🇧🇪 Bélgica</option>
      <option value="🇧🇿 Belize">🇧🇿 Belize</option>
      <option value="🇧🇯 Benin">🇧🇯 Benin</option>
      <option value="🇧🇾 Bielorrússia">🇧🇾 Bielorrússia</option>
      <option value="🇧🇴 Bolívia">🇧🇴 Bolívia</option>
      <option value="🇧🇦 Bósnia e Herzegovina">🇧🇦 Bósnia e Herzegovina</option>
      <option value="🇧🇼 Botsuana">🇧🇼 Botsuana</option>
      <option value="🇧🇷 Brasil">🇧🇷 Brasil</option>
      <option value="🇧🇳 Brunei">🇧🇳 Brunei</option>
      <option value="🇧🇬 Bulgária">🇧🇬 Bulgária</option>
      <option value="🇧🇫 Burkina Faso">🇧🇫 Burkina Faso</option>
      <option value="🇧🇮 Burundi">🇧🇮 Burundi</option>
      <option value="🇨🇻 Cabo Verde">🇨🇻 Cabo Verde</option>
      <option value="🇨🇲 Camarões">🇨🇲 Camarões</option>
      <option value="🇰🇭 Camboja">🇰🇭 Camboja</option>
      <option value="🇨🇦 Canadá">🇨🇦 Canadá</option>
      <option value="🇶🇦 Catar">🇶🇦 Catar</option>
      <option value="🇰🇿 Cazaquistão">🇰🇿 Cazaquistão</option>
      <option value="🇹🇩 Chade">🇹🇩 Chade</option>
      <option value="🇨🇱 Chile">🇨🇱 Chile</option>
      <option value="🇨🇳 China">🇨🇳 China</option>
      <option value="🇨🇾 Chipre">🇨🇾 Chipre</option>
      <option value="🇨🇴 Colômbia">🇨🇴 Colômbia</option>
      <option value="🇰🇲 Comores">🇰🇲 Comores</option>
      <option value="🇨🇬 Congo">🇨🇬 Congo</option>
      <option value="🇨🇩 Congo (RDC)">🇨🇩 Congo (RDC)</option>
      <option value="🇰🇷 Coreia do Sul">🇰🇷 Coreia do Sul</option>
      <option value="🇰🇵 Coreia do Norte">🇰🇵 Coreia do Norte</option>
      <option value="🇨🇷 Costa Rica">🇨🇷 Costa Rica</option>
      <option value="🇨🇮 Costa do Marfim">🇨🇮 Costa do Marfim</option>
      <option value="🇭🇷 Croácia">🇭🇷 Croácia</option>
      <option value="🇩🇰 Dinamarca">🇩🇰 Dinamarca</option>
      <option value="🇩🇯 Djibouti">🇩🇯 Djibouti</option>
      <option value="🇩🇲 Dominica">🇩🇲 Dominica</option>
      <option value="🇪🇬 Egito">🇪🇬 Egito</option>
      <option value="🇸🇻 El Salvador">🇸🇻 El Salvador</option>
      <option value="🇦🇪 Emirados Árabes Unidos">
        🇦🇪 Emirados Árabes Unidos
      </option>
      <option value="🇪🇨 Equador">🇪🇨 Equador</option>
      <option value="🇪🇷 Eritreia">🇪🇷 Eritreia</option>
      <option value="🇸🇰 Eslováquia">🇸🇰 Eslováquia</option>
      <option value="🇸🇮 Eslovênia">🇸🇮 Eslovênia</option>
      <option value="🇪🇸 Espanha">🇪🇸 Espanha</option>
      <option value="🇺🇸 Estados Unidos">🇺🇸 Estados Unidos</option>
      <option value="🇪🇪 Estônia">🇪🇪 Estônia</option>
      <option value="🇸🇿 Eswatini">🇸🇿 Eswatini</option>
      <option value="🇫🇯 Fiji">🇫🇯 Fiji</option>
      <option value="🇵🇭 Filipinas">🇵🇭 Filipinas</option>
      <option value="🇫🇮 Finlândia">🇫🇮 Finlândia</option>
      <option value="🇬🇦 Gabão">🇬🇦 Gabão</option>
      <option value="🇬🇲 Gâmbia">🇬🇲 Gâmbia</option>
      <option value="🇬🇭 Gana">🇬🇭 Gana</option>
      <option value="🇬🇪 Geórgia">🇬🇪 Geórgia</option>
      <option value="🇬🇩 Granada">🇬🇩 Granada</option>
      <option value="🇬🇷 Grécia">🇬🇷 Grécia</option>
      <option value="🇬🇹 Guatemala">🇬🇹 Guatemala</option>
      <option value="🇬🇳 Guiné">🇬🇳 Guiné</option>
      <option value="🇬🇼 Guiné-Bissau">🇬🇼 Guiné-Bissau</option>
      <option value="🇬🇶 Guiné Equatorial">🇬🇶 Guiné Equatorial</option>
      <option value="🇭🇹 Haiti">🇭🇹 Haiti</option>
      <option value="🇳🇱 Holanda">🇳🇱 Holanda</option>
      <option value="🇭🇳 Honduras">🇭🇳 Honduras</option>
      <option value="🇾🇪 Iémen">🇾🇪 Iémen</option>
      <option value="🇲🇭 Ilhas Marshall">🇲🇭 Ilhas Marshall</option>
      <option value="🇸🇧 Ilhas Salomão">🇸🇧 Ilhas Salomão</option>
      <option value="🇮🇳 Índia">🇮🇳 Índia</option>
      <option value="🇮🇩 Indonésia">🇮🇩 Indonésia</option>
      <option value="🇮🇷 Irã">🇮🇷 Irã</option>
      <option value="🇮🇶 Iraque">🇮🇶 Iraque</option>
      <option value="🇮🇪 Irlanda">🇮🇪 Irlanda</option>
      <option value="🇮🇸 Islândia">🇮🇸 Islândia</option>
      <option value="🇮🇱 Israel">🇮🇱 Israel</option>
      <option value="🇯🇲 Jamaica">🇯🇲 Jamaica</option>
      <option value="🇯🇵 Japão">🇯🇵 Japão</option>
      <option value="🇰🇮 Kiribati">🇰🇮 Kiribati</option>
      <option value="🇽🇰 Kosovo">🇽🇰 Kosovo</option>
      <option value="🇱🇦 Laos">🇱🇦 Laos</option>
      <option value="🇱🇸 Lesoto">🇱🇸 Lesoto</option>
      <option value="🇱🇻 Letônia">🇱🇻 Letônia</option>
      <option value="🇱🇧 Líbano">🇱🇧 Líbano</option>
      <option value="🇱🇷 Libéria">🇱🇷 Libéria</option>
      <option value="🇱🇾 Líbia">🇱🇾 Líbia</option>
      <option value="🇱🇮 Liechtenstein">🇱🇮 Liechtenstein</option>
      <option value="🇱🇹 Lituânia">🇱🇹 Lituânia</option>
      <option value="🇲🇰 Macedônia do Norte">🇲🇰 Macedônia do Norte</option>
      <option value="🇲🇬 Madagáscar">🇲🇬 Madagáscar</option>
      <option value="🇲🇾 Malásia">🇲🇾 Malásia</option>
      <option value="🇲🇼 Malawi">🇲🇼 Malawi</option>
      <option value="🇲🇻 Maldivas">🇲🇻 Maldivas</option>
      <option value="🇲🇱 Mali">🇲🇱 Mali</option>
      <option value="🇲🇹 Malta">🇲🇹 Malta</option>
      <option value="🇲🇦 Marrocos">🇲🇦 Marrocos</option>
      <option value="🇲🇺 Maurícia">🇲🇺 Maurícia</option>
      <option value="🇲🇷 Mauritânia">🇲🇷 Mauritânia</option>
      <option value="🇲🇽 México">🇲🇽 México</option>
      <option value="🇫🇲 Micronésia">🇫🇲 Micronésia</option>
      <option value="🇲🇿 Moçambique">🇲🇿 Moçambique</option>
      <option value="🇲🇩 Moldávia">🇲🇩 Moldávia</option>
      <option value="🇲🇨 Mônaco">🇲🇨 Mônaco</option>
      <option value="🇲🇳 Mongólia">🇲🇳 Mongólia</option>
      <option value="🇳🇦 Namíbia">🇳🇦 Namíbia</option>
      <option value="🇳🇷 Nauru">🇳🇷 Nauru</option>
      <option value="🇳🇵 Nepal">🇳🇵 Nepal</option>
      <option value="🇳🇮 Nicarágua">🇳🇮 Nicarágua</option>
      <option value="🇳🇪 Níger">🇳🇪 Níger</option>
      <option value="🇳🇬 Nigéria">🇳🇬 Nigéria</option>
      <option value="🇳🇴 Noruega">🇳🇴 Noruega</option>
      <option value="🇵🇼 Palau">🇵🇼 Palau</option>
      <option value="🇵🇦 Panamá">🇵🇦 Panamá</option>
      <option value="🇵🇬 Papua-Nova Guiné">🇵🇬 Papua-Nova Guiné</option>
      <option value="🇵🇰 Paquistão">🇵🇰 Paquistão</option>
      <option value="🇵🇾 Paraguai">🇵🇾 Paraguai</option>
      <option value="🇵🇪 Peru">🇵🇪 Peru</option>
      <option value="🇵🇱 Polônia">🇵🇱 Polônia</option>
      <option value="🇰🇪 Quênia">🇰🇪 Quênia</option>
      <option value="🇬🇧 Reino Unido">🇬🇧 Reino Unido</option>
      <option value="🇨🇫 República Centro-Africana">
        🇨🇫 República Centro-Africana
      </option>
      <option value="🇨🇿 República Tcheca">🇨🇿 República Tcheca</option>
      <option value="🇷🇴 Romênia">🇷🇴 Romênia</option>
      <option value="🇷🇼 Ruanda">🇷🇼 Ruanda</option>
      <option value="🇼🇸 Samoa">🇼🇸 Samoa</option>
      <option value="🇸🇲 San Marino">🇸🇲 San Marino</option>
      <option value="🇱🇨 Santa Lúcia">🇱🇨 Santa Lúcia</option>
      <option value="🇻🇨 São Vicente e Granadinas">
        🇻🇨 São Vicente e Granadinas
      </option>
      <option value="🇸🇹 São Tomé e Príncipe">🇸🇹 São Tomé e Príncipe</option>
      <option value="🇸🇳 Senegal">🇸🇳 Senegal</option>
      <option value="🇷🇸 Sérvia">🇷🇸 Sérvia</option>
      <option value="🇸🇨 Seychelles">🇸🇨 Seychelles</option>
      <option value="🇸🇱 Serra Leoa">🇸🇱 Serra Leoa</option>
      <option value="🇸🇬 Singapura">🇸🇬 Singapura</option>
      <option value="🇸🇾 Síria">🇸🇾 Síria</option>
      <option value="🇸🇴 Somália">🇸🇴 Somália</option>
      <option value="🇱🇰 Sri Lanka">🇱🇰 Sri Lanka</option>
      <option value="🇸🇩 Sudão">🇸🇩 Sudão</option>
      <option value="🇸🇸 Sudão do Sul">🇸🇸 Sudão do Sul</option>
      <option value="🇸🇪 Suécia">🇸🇪 Suécia</option>
      <option value="🇨🇭 Suíça">🇨🇭 Suíça</option>
      <option value="🇹🇭 Tailândia">🇹🇭 Tailândia</option>
      <option value="🇹🇿 Tanzânia">🇹🇿 Tanzânia</option>
      <option value="🇹🇯 Tajiquistão">🇹🇯 Tajiquistão</option>
      <option value="🇹🇱 Timor-Leste">🇹🇱 Timor-Leste</option>
      <option value="🇹🇬 Togo">🇹🇬 Togo</option>
      <option value="🇹🇴 Tonga">🇹🇴 Tonga</option>
      <option value="🇹🇹 Trinidad e Tobago">🇹🇹 Trinidad e Tobago</option>
      <option value="🇹🇳 Tunísia">🇹🇳 Tunísia</option>
      <option value="🇹🇲 Turcomenistão">🇹🇲 Turcomenistão</option>
      <option value="🇹🇷 Turquia">🇹🇷 Turquia</option>
      <option value="🇺🇦 Ucrânia">🇺🇦 Ucrânia</option>
      <option value="🇺🇬 Uganda">🇺🇬 Uganda</option>
      <option value="🇺🇾 Uruguai">🇺🇾 Uruguai</option>
      <option value="🇻🇺 Vanuatu">🇻🇺 Vanuatu</option>
      <option value="🇻🇦 Vaticano">🇻🇦 Vaticano</option>
      <option value="🇻🇪 Venezuela">🇻🇪 Venezuela</option>
      <option value="🇿🇲 Zâmbia">🇿🇲 Zâmbia</option>
      <option value="🇿🇼 Zimbábue">🇿🇼 Zimbábue</option>
    </select>
  );
});

export default Paises;
