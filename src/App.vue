<template>
	<v-app>
		<!-- <header class="app-header"> -->
		<v-toolbar dense style="position: sticky; top: 0px; left: 0px; z-index: 5;">
			<v-app-bar-nav-icon></v-app-bar-nav-icon>
			<span class="title ml-0 mr-5">
				note
				<span class="font-weight-light grey darken-2 py-1 px-1 white--text">guy</span>
			</span>
			<v-toolbar-title></v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>
			<v-btn icon>
				<v-icon @click="createNote">mdi-note-plus</v-icon>
			</v-btn>
			<v-btn icon>
				<v-icon>mdi-dots-vertical</v-icon>
			</v-btn>
		</v-toolbar>
		<main class="app-body">
			<v-content>
				<!-- <note class="mt-4 mx-4" v-for="note in notes" :key="note.id" :note="note" /> -->
				<HelloWorld :notes="notes" @updateNote="handleUpdate" @deleteNote="deleteNote" />
			</v-content>
		</main>
	</v-app>
</template>
<script>
import HelloWorld from "./components/HelloWorld";
export default {
	name: "App",
	components: {
		HelloWorld
	},
	data() {
		return {
			activeNote: null,
			text: "Balls",
			notes: []
		};
	},
	methods: {
		initializeNotes() {
			console.log(this.text);
			this.notes = this.getfromLocalStorage("storedNotes") || [
				{
					id: 0,
					title: "note 1",
					content: "Write a note...",
					date: "4.28.2020"
				},
				{
					id: 1,
					title: "note 2",
					content: "Write a note...",
					date: "4.28.2020"
				}
			];
		},
		getActiveNote() {
			this.active = !this.active;
			console.log(this.active);
		},
		createNote() {
			const newNote = {
				id: this.generateNewId(),
				title: "Title",
				content: "Write a note...",
				date: new Date().toLocaleString()
			};
			this.notes.push(newNote);
			localStorage.setItem("storedNotes", JSON.stringify(this.notes));
			this.sendToLocalStorage("storedNotes", this.notes);
		},
		deleteNote(id) {
			const targetIndex = this.notes.findIndex(note => note.id == id);
			console.log(targetIndex);

			this.notes.splice(targetIndex, 1);
			localStorage.setItem("storedNotes", JSON.stringify(this.notes));
			this.sendToLocalStorage("storedNotes", this.notes);
		},
		handleUpdate(data) {
			let [id, modifiedNote] = data;
			const targetNote = this.notes[this.notes.findIndex(note => note.id == id)];
			console.log(targetNote);

			Object.keys(modifiedNote).forEach(key => {
				targetNote[key] = modifiedNote[key];
			});

			this.sendToLocalStorage("storedNotes", this.notes);
		},
		generateNewId() {
			this.notes.sort((a, b) => {
				let first = a.id;
				let second = b.id;
				if (first > second) {
					return 1;
				} else if (first < second) {
					return -1;
				} else if (first == second) {
					return 0;
				}
			});
			if (this.notes.length === 0) {
				let newId = 0;
				return newId;
			} else {
				let lastElem = this.notes[this.notes.length - 1];
				console.log(lastElem);

				let newId = lastElem.id + 1;
				return newId;
			}
		},
		sendToLocalStorage(key, data) {
			// localStorage.setItem(key, data);
			localStorage.setItem(key, JSON.stringify(data));
		},
		getfromLocalStorage(key) {
			// localStorage.getItem(key);
			return JSON.parse(localStorage.getItem(key));
		}
	},
	created() {
		this.initializeNotes();
	}
};
</script>
<style>
* {
	user-select: none;
	touch-action: manipulation;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}

v-toolbar {
	padding: sticky;
	top: 0px;
	left: 0px;
}
</style>
