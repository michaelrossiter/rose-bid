require 'spec_helper'

describe LandingPagesController do

  describe "GET 'indexa'" do
    it "returns http success" do
      get 'indexa'
      response.should be_success
    end
  end

  describe "GET 'indexb'" do
    it "returns http success" do
      get 'indexb'
      response.should be_success
    end
  end

end
