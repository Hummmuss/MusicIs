import Parse from "parse/react-native";

export const fetchTracks = async () => {
    const Tracks = Parse.Object.extend('Tracks');
    const query = new Parse.Query(Tracks);
    try {
        let results = await query.find();
        console.log(results)
        results = results.map(item => item.attributes)
        console.log(results)
        return results;
    } catch (error) {
        console.error('Error while fetching Tracks', error);
    }
};
