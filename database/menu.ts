export const menuTop = [
    {
        icon: "fa-solid fa-user",
        title:'Tableau de bord',
        router:'/',
        isActive:true
    },
    {
        icon: "fa-solid fa-user",
        title:'Documents',
        router:'/customer/customerInterface/customer-documents',
        isActive:false
    },
    {
        icon: " fa-regular fa-envelope",
        title:'Messagerie',
        router:'',
        isActive:false
    },
    {
        icon: "fa-solid fa-id-card",
        title:'Paiement',
        router:'',
        isActive:false
    },
    {
        icon: "fa-solid fa-phone",
        title:'Suivi Notaire',
        router:'/contact',
        isActive:false
    },
    {
        icon: "fa-solid fa-phone",
        title:'Contacts',
        router:'',
        isActive:false
    }
]

export const menuBottom = [
    {
        icon: "fa-solid fa-gear",
        title:'Paramètres',
        router:'/setting',
        isActive:false
    },
    {
        icon: "fa-solid fa-right-from-bracket",
        title:'Déconnexion',
        router:'/logout',
        isActive:false
    }
  
]