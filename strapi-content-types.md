# Strapi में Content Types बनाने का तरीका

## 1. Strapi Admin में जाएं
- http://localhost:1337/admin पर जाएं
- अपने admin account से login करें

## 2. Content Types बनाएं

### Posts के लिए:
1. **Content-Type Builder** पर क्लिक करें
2. **Create new collection type** पर क्लिक करें
3. **Display name:** "Post" लिखें
4. **API ID:** "post" (automatically हो जाएगा)
5. **Fields जोड़ें:**
   - **Title** (Text field)
   - **Description** (Rich text field)
   - **Image** (Media field)
   - **Slug** (UID field)
6. **Save** करें

### Services के लिए:
1. **Create new collection type**
2. **Display name:** "Service"
3. **Fields:**
   - **Title** (Text)
   - **Description** (Rich text)
   - **Icon** (Media)
   - **Price** (Number)

### Projects के लिए:
1. **Create new collection type**
2. **Display name:** "Project"
3. **Fields:**
   - **Title** (Text)
   - **Description** (Rich text)
   - **Image** (Media)
   - **Category** (Enumeration: Web, Mobile, Design)

## 3. Content जोड़ें
1. **Content Manager** में जाएं
2. अपने content type को select करें
3. **Create new entry** पर क्लिक करें
4. Data भरें और **Save** करें

## 4. API Token Permissions
1. **Settings** → **API Tokens**
2. अपने token को edit करें
3. सभी permissions enable करें

## 5. Test करें
- http://localhost:3000/test-strapi पर जाएं
- आपका content दिखना चाहिए 