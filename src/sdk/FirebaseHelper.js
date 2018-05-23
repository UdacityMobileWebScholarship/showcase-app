import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

class FirebaseHelper {
    signIn() {
        const provider = new firebase.auth.GithubAuthProvider()
        provider.addScope('user')
        const signInPromise = new Promise((resolve, reject) => {
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                .then(_ => firebase.auth().signInWithPopup(provider))
                .then(result => {
                    /**
                        const token = result.credential.accessToken;
                        in future if we need to pull projects automatically, use this token^
                     */
                    const user = result.user;
                    resolve(user.providerData[0])

                })
                .catch(reject)
        })
        return signInPromise
    }
    signOut() {
        return firebase.auth().signOut()
    }
    getCurrentUser() {
        const u = firebase.auth().currentUser
        debugger
        return u
    }
}

const HELPER = new FirebaseHelper()
export default HELPER