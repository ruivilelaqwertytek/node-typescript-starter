import { ref, set } from "firebase/database";
import { firebaseDB } from '../../../config/firebase';

interface RequestCodeParams {
    email: string
}

export const writeRequestCodeData = async ({ email }: RequestCodeParams) => {
    await set(
        ref(
            firebaseDB,
            'requestcode',
        ),
        {
            email
        }
    );
}