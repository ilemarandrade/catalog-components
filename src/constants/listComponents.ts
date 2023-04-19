interface IComponent {
  title: string;
  path: string;
}

interface IListComponents {
  [key: string]: IComponent;
}

const listComponents: IListComponents = {
  showPaginateItems: {
    title: "Lista de elementos con paginador",
    path: "/component-to-show-elements-list",
  },
  barChart: {
    title: "Grafica de barra",
    path: "/component-to-show-bar-chart",
  },
  uploadFile: {
    title: "Componente para subir archivos",
    path: "/component-to-upload-file",
  },
  datePicker: {
    title: "Componente para manejo de fechas",
    path: "/component-to-dates",
  },
  sortableList: {
    title: "Componente para reordenar listas",
    path: "/component-to-modify-elements-list",
  },
};

export default listComponents;
