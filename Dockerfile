FROM node:16

## Step 1:
WORKDIR /app

## Step 2:
#COPY . app.py /app/
#COPY ["package.json", "package-lock.json*", "./"]
COPY songapp/ .

## Step 3: Install dependencies
# hadolint ignore=DL3013
	
## Step 4: install nodejs deps
RUN npm install

## Step 4:
# Expose port 3000
EXPOSE 3000

## Step 5:
# Run app.py at container launch
CMD ["node", "app.js"]
