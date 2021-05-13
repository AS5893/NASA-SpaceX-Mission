
var rootRef = firebase.database().ref().child("forms");

rootRef.on("child_added", snap => {

    var firstname = snap.child("firstname").val();
    var lastname = snap.child("lastname").val();
    var email = snap.child("email").val();
    var phone = snap.child("phone").val();
    var country = snap.child("country").val();
    var message = snap.child("message").val();

    $("#table_body").append(<tr><td>" + firstname + "</td>
                                <td>" + lastname + "</td>
                                <td>" + country + "</td>
                                <td>" + email + "</td>
                                <td>" + phone + "</td>
                                <td>" + message + "</td>    
                                </tr>);
});
