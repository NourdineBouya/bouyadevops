// sanity/schemas/affiliateWidget.js
export default {
    name: 'affiliateWidget',
    title: 'Widget d\'Affiliation',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Titre du Widget',
        type: 'string'
      },
      {
        name: 'company',
        title: 'Nom de l\'entreprise',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 3
      },
      {
        name: 'offer',
        title: 'Offre spéciale',
        type: 'string',
        description: 'Ex: "-68% de réduction", "À partir de 1.99€/mois"'
      },
      {
        name: 'price',
        title: 'Prix affiché',
        type: 'string',
        description: 'Ex: ".COM $8.88", "75% OFF"'
      },
      {
        name: 'affiliateLink',
        title: 'Lien d\'affiliation',
        type: 'url'
        
      },
      {
        name: 'image',
        title: 'Image/Logo',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'buttonText',
        title: 'Texte du bouton',
        type: 'string',
        initialValue: 'Voir l\'offre'
      },
      {
        name: 'colorScheme',
        title: 'Couleur du widget',
        type: 'string',
        options: {
          list: [
            {title: 'Orange (Namecheap)', value: 'orange'},
            {title: 'Bleu', value: 'blue'},
            {title: 'Vert', value: 'green'},
            {title: 'Rouge', value: 'red'},
            {title: 'Violet', value: 'purple'},
            {title: 'Rose', value: 'pink'}
          ]
        },
        initialValue: 'blue'
      },
      {
        name: 'widgetType',
        title: 'Type de widget',
        type: 'string',
        options: {
          list: [
            {title: 'Sidebar Gauche', value: 'leftSidebar'},
            {title: 'Sidebar Droite', value: 'rightSidebar'},
            {title: 'Dans l\'article', value: 'inContent'},
            {title: 'Mobile', value: 'mobile'}
          ]
        },
        initialValue: 'rightSidebar'
      },
      {
        name: 'isActive',
        title: 'Widget actif',
        type: 'boolean',
        initialValue: true
      },
      {
        name: 'priority',
        title: 'Priorité d\'affichage',
        type: 'number',
        description: 'Plus le nombre est élevé, plus le widget sera affiché en premier',
        initialValue: 1
      },
      {
        name: 'targetPages',
        title: 'Pages cibles',
        type: 'array',
        of: [
          {
            type: 'string',
            options: {
              list: [
                {title: 'Toutes les pages', value: 'all'},
                {title: 'Articles de blog', value: 'blog'},
                {title: 'Page d\'accueil', value: 'home'},
                {title: 'Catégorie Tech', value: 'tech'},
                {title: 'Catégorie Web', value: 'web'}
              ]
            }
          }
        ],
        initialValue: ['all']
      }
    ],
    preview: {
      select: {
        title: 'company',
        subtitle: 'title',
        media: 'image'
      }
    }
  }