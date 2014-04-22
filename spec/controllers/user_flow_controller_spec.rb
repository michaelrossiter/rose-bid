require 'spec_helper'

describe UserFlowController do

  describe "GET 'login'" do
    it "returns http success" do
      get 'login'
      response.should be_success
    end
  end

  describe "GET 'eventsel'" do
    it "returns http success" do
      get 'eventsel'
      response.should be_success
    end
  end

  describe "GET 'pictures'" do
    it "returns http success" do
      get 'pictures'
      response.should be_success
    end
  end

  describe "GET 'profile'" do
    it "returns http success" do
      get 'profile'
      response.should be_success
    end
  end

  describe "GET 'products'" do
    it "returns http success" do
      get 'products'
      response.should be_success
    end
  end

  describe "GET 'order-details'" do
    it "returns http success" do
      get 'order-details'
      response.should be_success
    end
  end

  describe "GET 'confirmation'" do
    it "returns http success" do
      get 'confirmation'
      response.should be_success
    end
  end

  describe "GET 'view-quotes'" do
    it "returns http success" do
      get 'view-quotes'
      response.should be_success
    end
  end

  describe "GET 'bella-flora-quote'" do
    it "returns http success" do
      get 'bella-flora-quote'
      response.should be_success
    end
  end

  describe "GET 'bella-flora-details'" do
    it "returns http success" do
      get 'bella-flora-details'
      response.should be_success
    end
  end

end
