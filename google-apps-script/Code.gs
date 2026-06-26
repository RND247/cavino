const SHEET_ID = "1m2BAGVi_ulpXVZvRJcAyAXG4udm2g7Jc9ld86Sj9NSU";
const SHEET_NAME = "Leads";

function doPost(event) {
  const payload = parsePayload_(event);
  const phone = payload.phone ? "'" + String(payload.phone) : "";
  const lock = LockService.getScriptLock();

  lock.waitLock(10000);

  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    sheet.getRange("D:D").setNumberFormat("@");

    sheet.appendRow([
      new Date(),
      payload.name || "",
      payload.email || "",
      phone,
      payload.source || "CaVino landing page",
    ]);

    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: error.message });
  } finally {
    lock.releaseLock();
  }
}

function parsePayload_(event) {
  if (!event || !event.postData || !event.postData.contents) {
    return {};
  }

  try {
    return JSON.parse(event.postData.contents);
  } catch (error) {
    return event.parameter || {};
  }
}

function json_(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
