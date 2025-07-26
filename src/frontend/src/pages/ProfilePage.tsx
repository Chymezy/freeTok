import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/dashboard/Sidebar";
import { useAuth } from "../context/AuthContext";
import { backendService } from "../services/backendService";
import type { Profile } from "../../../declarations/backend/backend.did";

export default function ProfilePage() {
  const { isAuthenticated, principal, login } = useAuth();
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("👤");
  const [isUpdating, setIsUpdating] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);

  // Fetch user profile when authenticated
  useEffect(() => {
    if (isAuthenticated && principal) {
      fetchProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, principal]);

  const fetchProfile = async () => {
    if (!backendService || !principal) return;
    try {
      const userProfileResult = await backendService.getProfile(principal); // pass string, not Principal
      if (userProfileResult && userProfileResult.length > 0) {
        const userProfile = userProfileResult[0];
        if (userProfile) {
          setProfile(userProfile);
          setUsername(userProfile.username);
          setBio(userProfile.bio);
          setAvatar(userProfile.avatar);
        }
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const handleUpdateProfile = async () => {
    if (!isAuthenticated || !backendService) {
      alert("Please connect with Internet Identity first");
      return;
    }

    if (!username.trim()) {
      alert("Username is required");
      return;
    }

    setIsUpdating(true);
    try {
      const result = await backendService.updateProfile(username, bio, avatar);
      if ("ok" in result) {
        alert("Profile updated successfully!");
        setProfile(result.ok);
      } else {
        alert("Error updating profile: " + result.err);
      }
    } catch (error) {
      console.error("Update profile error:", error);
      alert("Error updating profile: " + error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleCreateProfile = async () => {
    if (!isAuthenticated || !backendService) {
      alert("Please connect with Internet Identity first");
      return;
    }

    if (!username.trim()) {
      alert("Username is required");
      return;
    }

    setIsUpdating(true);
    try {
      const result = await backendService.createProfile(username, bio, avatar);
      if ("ok" in result) {
        alert("Profile created successfully!");
        setProfile(result.ok);
      } else {
        alert("Error creating profile: " + result.err);
      }
    } catch (error) {
      console.error("Create profile error:", error);
      alert("Error creating profile: " + error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-white pt-16">
        <Sidebar />
        <main className="mx-auto max-w-4xl flex-1 px-6 py-20">
          {!isAuthenticated ? (
            <div className="text-center">
              <h1 className="font-heading text-deep-indigo mb-4 text-3xl font-bold">
                Profile Page
              </h1>
              <p className="text-charcoal-black/70 mb-8 text-lg">
                Connect with Internet Identity to view your profile.
              </p>
              <button onClick={login} className="btn-primary">
                Connect Internet Identity
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="font-heading text-deep-indigo mb-4 text-3xl font-bold">
                  Your Profile
                </h1>
                <div className="from-deep-indigo to-electric-blue mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br">
                  <span className="font-code text-2xl font-bold text-white">
                    {avatar}
                  </span>
                </div>
                <p className="text-charcoal-black/70">Principal: {principal}</p>
              </div>

              <div className="from-deep-indigo/5 to-electric-blue/5 rounded-2xl bg-gradient-to-r p-6">
                <h2 className="font-heading text-deep-indigo mb-4 text-xl font-bold">
                  Profile Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-charcoal-black mb-2 block text-sm font-medium">
                      Username *
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter username"
                      className="focus:ring-deep-indigo text-charcoal-black w-full rounded-xl border border-gray-200 bg-white p-3 focus:border-transparent focus:ring-2"
                    />
                  </div>
                  <div>
                    <label className="text-charcoal-black mb-2 block text-sm font-medium">
                      Bio
                    </label>
                    <textarea
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      placeholder="Tell us about yourself..."
                      rows={3}
                      className="focus:ring-deep-indigo text-charcoal-black w-full resize-none rounded-xl border border-gray-200 bg-white p-3 focus:border-transparent focus:ring-2"
                    />
                  </div>
                  <div>
                    <label className="text-charcoal-black mb-2 block text-sm font-medium">
                      Avatar
                    </label>
                    <input
                      type="text"
                      value={avatar}
                      onChange={(e) => setAvatar(e.target.value)}
                      placeholder="Enter emoji or text"
                      className="focus:ring-deep-indigo text-charcoal-black w-full rounded-xl border border-gray-200 bg-white p-3 focus:border-transparent focus:ring-2"
                    />
                  </div>
                  <button
                    onClick={
                      profile ? handleUpdateProfile : handleCreateProfile
                    }
                    disabled={isUpdating || !username.trim()}
                    className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isUpdating
                      ? "Updating..."
                      : profile
                        ? "Update Profile"
                        : "Create Profile"}
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h2 className="font-heading text-deep-indigo mb-4 text-xl font-bold">
                  Your Posts
                </h2>
                <p className="text-charcoal-black/70">
                  Your posts will appear here. Visit the feed to create your
                  first post!
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
