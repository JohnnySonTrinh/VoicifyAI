import { action } from "./_generated/server";
import { v } from "convex/values";

import OpenAI from "openai";
import { SpeechCreateParams } from "openai/resources/audio/speech.mjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateAudioAction = action({
  args: { input: v.string(), voice: v.string() },
  handler: async (_, { voice, input }) => {
    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: voice as SpeechCreateParams["voice"],
      input,
    });

    const buffer = await mp3.arrayBuffer();

    return buffer;
  },
});

// Define an action to generate a thumbnail using OpenAI's API
export const generateThumbnailAction = action({
  // Define the arguments for the action, in this case, a prompt string
  args: { prompt: v.string() },
  // Define the handler function that will be executed when the action is called
  handler: async (_, { prompt }) => {
    // Call the OpenAI API to generate an image based on the provided prompt
    const response = await openai.images.generate({
      model: "dall-e-3", // Specify the model to use for image generation
      prompt, // Use the provided prompt for image generation
      size: "1024x1024", // Specify the size of the generated image
      quality: "standard", // Specify the quality of the generated image
      n: 1, // Specify the number of images to generate
    });

    // Extract the URL of the generated image from the response
    const url = response.data[0].url;

    // If no URL is returned, throw an error
    if (!url) {
      throw new Error("Error generating thumbnail");
    }

    // Fetch the image data from the URL
    const imageResponse = await fetch(url);
    // Convert the image data to an ArrayBuffer
    const buffer = await imageResponse.arrayBuffer();
    // Return the image data as an ArrayBuffer
    return buffer;
  },
});
