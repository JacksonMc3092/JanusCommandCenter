// ====================
// JANUS Cloud Sync - Google Apps Script
// ====================
// 
// SETUP INSTRUCTIONS:
// 1. Open your Google Sheet ("JANUS Data")
// 2. Click Extensions → Apps Script
// 3. Delete any code in the editor
// 4. Paste this entire script
// 5. Click Save (disk icon)
// 6. Click Deploy → New deployment
// 7. Select type: "Web app"
// 8. Set "Who has access" to "Anyone" (or "Anyone with Google account" for more security)
// 9. Click Deploy
// 10. Copy the Web App URL
// 11. Paste that URL into JANUS Settings → Cloud Sync URL
//
// That's it! JANUS can now read/write to your Sheet.
// ====================

// Handle GET requests (Load from Cloud)
function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Sheet1 not found'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    const data = sheet.getRange('A1').getValue();
    const timestamp = sheet.getRange('A2').getValue();
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      data: data,
      timestamp: timestamp
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle POST requests (Save to Cloud)
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Sheet1 not found'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get the posted data
    const postData = e.postData.contents;
    const timestamp = new Date().toISOString();
    
    // Write to Sheet
    sheet.getRange('A1').setValue(postData);
    sheet.getRange('A2').setValue('Last synced: ' + timestamp);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Data saved successfully',
      timestamp: timestamp
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function - run this manually to verify the script works
function testScript() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  Logger.log('Sheet found: ' + (sheet ? 'Yes' : 'No'));
  Logger.log('Current A1 value: ' + sheet.getRange('A1').getValue());
}
