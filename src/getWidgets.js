export function getWidgets(firebaseRef, workspaceId) {
  //Check if the user is logged in
  firebae.auth().onAuthStateChanged((user) => {
    if (user) {
      //2nd level reference
      const workspaceRef = firebaseRef.database().ref("workspaces/" + workSpaceId);
      //1st level reference
      const widgetsRef = firebaseRef.database().ref("widgets");

      //2nd level Iteration through all widget keys. "For each widget Snapshot"
      workspaceRef.child("widget_id").once('value', (wsSnapshot) => {
        wsSnapshot.forEach(function(widgetId)) {
          widgetsRef.child(widgetId.key).on('value', widgetSnapshot) => {
            //Output Widget Data -- Possibly Json
            console.log(widgetSnapShot);
          }
        }
      });
    }
  });
}
