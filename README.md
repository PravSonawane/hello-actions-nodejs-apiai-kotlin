# Actions on Google: Number Repeater Sample using Node.js, API AI and Kotlin

This is a super simple Assistant app, built using API.AI and Node.js and Kotlin, to
demonstrate how Apps for the Google Assistant can be written using Kotlin. This app simply requests the user to enter/say a number and repeats it.

## Setup Instructions

### Steps
1. Use the [Actions on Google Console](https://console.actions.google.com) to add a new project with a name of your choosing.
1. Click "Use API.AI" and then "Create Actions on API.AI".
1. Click "Save" to save the project.
1. Click on the gear icon to see the project settings.
1. Select "Export and Import".
1. Select "Restore from zip". Follow the directions to restore from the SillyNameMaker.zip in this repo.
1. Deploy the fulfillment webhook to your preferred hosting environment
(we recommend [Google Cloud Functions](https://cloud.google.com/functions/docs/tutorials/http)).
1. In the Fulfillment page of the API.AI console, enable Webhook, set the URL to the hosting URL, then save.
1. In the make_name intent, check “End Conversation” for Actions on Google, then Save.
1. Open API.AI's Integrations page, open the Settings menu for Actions on Google, then click Test.
1. Click View to open the Actions on Google simulator.
1. Type "Talk to my test app" in the simulator, or say "OK Google, talk to my test app" to any Actions on Google enabled device signed into your developer account.

## License
See LICENSE.md.

## Google+
Actions on Google Developers Community on Google+ [https://g.co/actionsdev](https://g.co/actionsdev).