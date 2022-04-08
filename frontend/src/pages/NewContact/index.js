import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="Novo contato"
      />

      <Input placeholder="Nome" />
      <Select>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
        <option value="123">Instagram</option>
      </Select>
      <Button type="button">
        Salvar as alterações
      </Button>

      <Button type="button" disabled>
        Salvar as alterações
      </Button>
    </>
  );
}
