import { Redirect } from "expo-router";

export default function Index() {
    // if logged in before redirect to "/home" otherwise "/login"

    return <Redirect href="/home" />;
}