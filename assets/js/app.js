const { createApp } = Vue;

createApp({
  data() {
    return {
      darkMode: false,
      date: this.getCurrentdate(),
      activeContact: -1,
      activeMessage: {
        active: false,
        index : -1,
      },
      search: "",
      contacts: [
        {
          name: "Michele",
          avatar: "./assets/img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "./assets/img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "./assets/img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "./assets/img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "./assets/img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "./assets/img/avatar_6.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message:
                "Peccato, aspettiamo dai, sarà questione di ore ormai :D",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "./assets/img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "./assets/img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
    };
  },
  methods: {
    setActiveContact(index) {
      console.log(index);
      this.activeContact = index;
      console.log("contatto attivo:", this.activeContact);
      this.activeMessage.index = -1;
    },
    getLastMessage(messages) {
      const lastMessageIndex = messages.length - 1;
      return messages[lastMessageIndex].message;
    },
    getDate(messages) {
      const dateIndex = messages.length - 1;
      return messages[dateIndex].date;
    },
    sendMessage(){
      const messageText = this.$refs.messageInput.value;

      this.contacts[this.activeContact].messages.push({
        date: this.date,
        message: messageText,
        status: "sent"
      });
      
      setTimeout(() => {
        this.contacts[this.activeContact].messages.push({
          date: this.date,
          message: "Ok",
          status: "received"
        });
      }, 1000);
      
      this.$refs.messageInput.value = "";

    },
    toggle(index) {
      this.activeMessage.index = index
      this.activeMessage.active = !this.activeMessage.active
      console.log(this.activeMessage.index);
      console.log(index);
    },
    deleteMessage(index){
      this.contacts[this.activeContact].messages.splice(index, 1);
      this.activeMessage.active = !this.activeMessage.active;
    },
    getCurrentdate() {
      hours= new Date().getHours();
      minutes= new Date().getMinutes().toString().padStart(2, "0");
      date= `${hours}:${minutes}`;
      return date;
    },
    toggleDarkMode() {
      const rootElement = document.querySelector(":root");
      this.darkMode = !this.darkMode;
      if (this.darkMode === false) {
        rootElement.style.setProperty("--container-bg", "white");
      } else {
        rootElement.style.setProperty("--container-bg", "rgb(61, 66, 80)");
      }
    },
  },
}).mount("#app");
