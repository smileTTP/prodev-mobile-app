import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchGroup: {
        backgroundColor: '#34967C',
        height: 134,
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'center',
    },
    searchFormGroup: {
        flexDirection: 'row',
        alignItems: 'center', 
        backgroundColor: '#fff', 
        borderRadius: 60,
        paddingVertical: 8,
        paddingLeft: 20,
        paddingRight: 10, 
        height: 54,
        width: 374,
        margin: 40,
    },
    searchControlGroup: {
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center', 
        paddingRight: 10, 
    },
    searchFormText: {
        fontSize: 14,
        fontWeight: 'medium',
        color: 'black', 
        marginBottom: 2,
    },
    searchControl: {
        fontSize: 12,
        fontWeight: 'normal',
        color: '#7E7B7B', 
        padding: 0, 
        height: 18,
    },
    searchButton: {
        backgroundColor: '#FFA800',
        borderRadius: 60,
        width: 39,
        height: 39,
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterGroup: {
        alignItems: 'center',
    },
    filterContainer: {
        
    },
    listingContainer: {

    },
    paginationContainer: {

    },
    showMoreButton: {

    },
    showMoreButtonText: {

    }

});

export { styles };