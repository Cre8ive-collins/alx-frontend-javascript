import { signUpUser } from './4-user-promise'
import { uploadPhoto } from './5-photo-reject'

export function handleProfileSignup(firstName, lastName, fileName){
    signUpUser(firstName, lastName).then((response) => {
        uploadPhoto(fileName).then((resp) => {
            return {
                status : resp,
                value : response,
            }
        })
    }
    )
}