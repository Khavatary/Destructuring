export default function getSpecial(char) {
  const spec = [];
  for (const prop of char.special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = prop;
    const temp = {
      id, name, icon, description,
    };
    spec.push(temp);
  }
  return spec;
}
