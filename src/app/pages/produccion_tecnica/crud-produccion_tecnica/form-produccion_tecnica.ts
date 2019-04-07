export let FORM_PRODUCCION_TECNICA = {
    titulo: 'ProduccionTecnica',
    tipo_formulario: 'mini',
    btn: 'Guardar',
    alertas: true,
    modelo: 'ProduccionTecnica',
    campos: [
        {
            etiqueta: 'select',
            claseGrid: 'col-4',
            nombre: 'TipoProduccionTecnica',
            label_i18n: 'tipoproducciontecnica',
            placeholder_i18n: 'tipoproducciontecnica',
            requerido: true,
            tipo: 'TipoProduccionTecnica',
            key: 'Nombre',
            opciones: [],
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-8',
            nombre: 'Nombre',
            label_i18n: 'titulo_produccion_tecnica',
            placeholder_i18n: 'placeholder_titulo_produccion_tecnica',
            requerido: true,
            tipo: 'text',
        },
        {
            etiqueta: 'input',
            claseGrid: 'col-2',
            nombre: 'Ano',
            label_i18n: 'ano',
            placeholder_i18n: 'ano',
            requerido: true,
            tipo: 'number',
            minimo: 1500,
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-2',
            nombre: 'Mes',
            label_i18n: 'mes',
            placeholder_i18n: 'mes',
            requerido: true,
            tipo: 'number',
            key: 'Nombre',
            relacion: false,
            opciones: [
                { Id: 1, Nombre: 'Enero' },
                { Id: 2, Nombre: 'Febrero' },
                { Id: 3, Nombre: 'Marzo' },
                { Id: 4, Nombre: 'Abril' },
                { Id: 5, Nombre: 'Mayo' },
                { Id: 6, Nombre: 'Junio' },
                { Id: 7, Nombre: 'Julio' },
                { Id: 8, Nombre: 'Agosto' },
                { Id: 9, Nombre: 'Septiembre|' },
                { Id: 10, Nombre: 'Octubre' },
                { Id: 11, Nombre: 'Noviembre' },
                { Id: 12, Nombre: 'Diciembre' },
            ],
        },
        {
            etiqueta: 'select',
            claseGrid: 'col-2',
            nombre: 'Ubicacion',
            label_i18n: 'ubicacion',
            placeholder_i18n: 'ubicacion',
            requerido: true,
            tipo: 'number',
            key: 'Nombre',
            relacion: false,
            opciones: [],
        },
        {
            etiqueta: 'textarea',
            claseGrid: 'col-12',
            nombre: 'Descripcion',
            label_i18n: 'descripcion',
            placeholder_i18n: 'descripcion',
            requerido: true,
            tipo: 'text',
        },
    ],
}
