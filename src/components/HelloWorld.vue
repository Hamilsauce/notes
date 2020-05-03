<template>
	<v-container
		grey-1
		class="white--text"
		@click="blurNote"
		style="background: rgba(240, 240, 240, 0.477); padding-left: 10px; padding-right: 10px"
	>
		<v-row>
			<v-col cols="12" class="pt-0 note-column">
				<!-- <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" /> -->
				<transitionGroup name="list">
					<note
						class="mt-6 mx-1 note"
						v-for="note in notes"
						:key="note.id"
						:note="note"
						:activeNoteId="activeNoteId"
						@noteActivated="checkActiveNote"
						@deactivateNote="deactivateNote"
						@updateNote="handleNoteUpdate"
						@deleteNote="deleteNote"
					/>
				</transitionGroup>
			</v-col>

			<v-col class="mb-4 text-centered">
				<h1 class="display-2 font-weight-bold mb-3">.</h1>

				<p class="subheading font-weight-regular">
					.
					<!-- For help and collaboration with other Vuetify developers,
					<br />please join our online
					<a
						href="https://community.vuetifyjs.com"
						target="_blank"
					>Discord Community</a>-->
				</p>
			</v-col>

			<v-col class="mb-5" cols="12">
				<h2 class="headline font-weight-bold mb-3">.</h2>

				<v-row justify="center">
					<!-- <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
            >{{ next.text }}</a
					>-->
				</v-row>
			</v-col>

			<v-col class="mb-5" cols="12">
				<h2 class="headline font-color white mb-3">.</h2>

				<v-row justify="center">.</v-row>
			</v-col>

			<v-col class="mb-5" cols="12">
				<h2 class="headline font-weight-bold mb-3">.</h2>

				<v-row justify="center">.</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import Note from "@/components/Note";

export default {
	name: "HelloWorld",
	components: {
		Note
	},
	props: {
		notes: Array
	},
	data: () => ({
		activeNoteId: null,
		ecosystem: [
			{
				text: "vuetify-loader",
				href: "https://github.com/vuetifyjs/vuetify-loader"
			},
			{
				text: "github",
				href: "https://github.com/vuetifyjs/vuetify"
			},
			{
				text: "awesome-vuetify",
				href: "https://github.com/vuetifyjs/awesome-vuetify"
			}
		],
		importantLinks: [
			{
				text: "Documentation",
				href: "https://vuetifyjs.com"
			},
			{
				text: "Chat",
				href: "https://community.vuetifyjs.com"
			},
			{
				text: "Made with Vuetify",
				href: "https://madewithvuejs.com/vuetify"
			},
			{
				text: "Twitter",
				href: "https://twitter.com/vuetifyjs"
			},
			{
				text: "Articles",
				href: "https://medium.com/vuetify"
			}
		],
		whatsNext: [
			{
				text: "Explore components",
				href: "https://vuetifyjs.com/components/api-explorer"
			},
			{
				text: "Select a layout",
				href: "https://vuetifyjs.com/layout/pre-defined"
			},
			{
				text: "Frequently Asked Questions",
				href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
			}
		]
	}),
	methods: {
		checkActiveNote(targetId) {
			this.activeNoteId = targetId;
		},
		deactivateNote() {
			//* This handles when a user clicks the 'done' button on a note
			this.activeNoteId = -1;
		},
		handleNoteUpdate(data) {
			this.$emit("updateNote", data);
		},
		deleteNote(data) {
			this.$emit("deleteNote", data);
		},
		blurNote(e) {
			//!* This checks to see if a click happened outside of a note, de-activates note if so
			let noteCheck = e.path.some(el => {
				try {
					return el.classList.contains("note") === true;
				} catch (error) {
					return false;
				}
			});
			console.log(noteCheck);
			if (noteCheck === false) {
				this.activeNoteId = -1;
			}
		}
	}
};
</script>
<style scoped>
/* .fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to  {
	opacity: 0;
} */

/* .list-item {
  display: inline-block;
  margin-right: 10px;
} */
.list-enter-active,
.list-leave-active {
	transition: all 0.3s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
	opacity: 0;
	transform: translateX(500px);
}
</style>
