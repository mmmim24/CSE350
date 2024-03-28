import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";
  // Create styles
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      color: "black",
    },
    section: {
      margin: 32,
      padding: 8,
    },
    viewer: {
      width: window.innerWidth/3, //the pdf viewer will take up all of the width and height
      height: window.innerHeight/2,
    },
  });
  
  // Create Document Component
  function BasicDocument({complaint}) {
    return (
      <PDFViewer style={styles.viewer} className="border border-[#136F63] rounded-xl">
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>Date : </Text>
                <Text>{complaint.date}</Text>
            </View>
            <View style={styles.section}>
                <Text>ID : </Text>
                <Text>{complaint.ID}</Text>
                <Text>Status : </Text>  
                <Text>{complaint.status}</Text>
            </View>
            <View style={styles.section}>
                <Text>Name : </Text>
                <Text>{complaint.fullName}</Text>
                <Text>Contact : </Text>
                <Text>{complaint.contact}</Text>
            </View>
            <View style={styles.section}>
                <Text>Known : </Text>
                <Text>{complaint.known}</Text>
                <Text>Info : </Text>
                <Text>{complaint.info}</Text>
                <Text>Incident : </Text>
                <Text>{complaint.incident}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    );
  }
  export default BasicDocument;